let update = null;

let f_data = {};

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}

const display_cinema = async () => {
  try {
    const response = await fetch("http://localhost:3000/Cinema");

    if (!response.ok) {
      throw new Error("Error" + response.statusText);
    }

    const data = await response.json();
    console.log(data);

    let print = "";

    data.map((v) => {
      print += `
              <option value = "${v.id}">${v.name}</option>
        `;
    });
    document.getElementById("xyz").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const handleChange = async () => {
  const options = document.getElementById("xyz").value;
  console.log(options);

  try {
    const response = await fetch("http://localhost:3000/Movies");

    if (!response.ok) {
      throw new Error("Error" + response.statusText);
    }

    const data = await response.json();
    console.log(data);

    let print = "";

    const F_data = data.filter((v) => v.cinema_id === options);
    console.log(F_data);

    F_data.map((v) => {
      print += `
              <option value = "${v.id}">${v.name}</option>
              
              `;
    });

    document.getElementById("movie").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const handleTimeChange = async () => {
  const option1 = document.getElementById("movie").value;
  console.log(option1);

  try {
    const response = await fetch("http://localhost:3000/Times");

    if (!response.ok) {
      throw new Error("Error" + response.statusText);
    }

    const data = await response.json();
    console.log(data);

    let print = "";

    f_data = data.find((v) => v.Movie_id === option1);
    console.log(f_data.Start_Date, f_data.End_Date);

    f_data.time.map((v) => {
      print += `
                <option value = "${v}">${v}</option>
            `;
    });

    document.getElementById("time").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const sit_data = async () => {
  event.preventDefault();
  let sits = parseInt(document.getElementById("no_sit").value);
  console.log(sits);

  let price = document.getElementById("price").value;
  console.log(price);

  let Start_Date = new Date(f_data.Start_Date);
  let End_Date = new Date(f_data.End_Date);

  let objects = {};

  for (
    var day = new Date(Start_Date);
    day <= new Date(End_Date);
    day.setDate(day.getDate() + 1)
  ) {
    objects[day.toLocaleDateString()] = new Array(sits).fill(0);
  }

  console.log(objects);

  const Cinema = document.getElementById("xyz").value;
  const Movie = document.getElementById("movie").value;
  const times = document.getElementById("time").value;
  const Price = document.getElementById("price").value;

  let obj = {
    Cinema_name: Cinema,
    Movie_name: Movie,
    Time: times,
    sit: objects,
    Price: Price,
  };

  if (update) {
    console.log("Update...");

    const response = await fetch("http://localhost:3000/Sit/" + update, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } else {
    console.log("Add...");
    try {
      await fetch("http://localhost:3000/Sit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const display_sit_data = async () => {
  try {
    let response = await fetch("http://localhost:3000/Times");
    let response1 = await fetch("http://localhost:3000/Cinema");
    let response2 = await fetch("http://localhost:3000/Movies");
    let response3 = await fetch("http://localhost:3000/Sit");

    const data = await response.json();
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    let print = `<table border="1">
              <tr>
                <th>Cinema Name</th>
                <th>Movie Name</th>
                <th>Time</th>
                <th>Sit</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
    `;

    data3.map((v) => {
      print += `
        <tr>
          <td>${data1.find((v1) => v1.id === v.Cinema_name).name}</td>
          <td>${data2.find((v2) => v2.id === v.Movie_name).name}</td>
          <td>${v.Time}</td>
          <td>${v.sit[Object.keys(v.sit)[0]].length}</td>
          <td>${v.Price}</td>
          <td><button onclick="handleEdit('${v.id}','${v.Cinema_name}','${
        v.Movie_name
      }','${JSON.stringify(v.time)}','${
        v.sit[Object.keys(v.sit)[0]].length
      }','${v.Price}')">Edit</button>  <button onclick="handleDelete('${
        v.id
      }')">Delete</button></td>
        </tr>
      `;
    });

    print += `</table>`;

    document.getElementById("Display_sit").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (id) => {
  try {
    const response = await fetch("http://localhost:3000/Sit/" + id, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = async (id, cinema, movie, time, sit, price) => {
  handleChange((document.getElementById("xyz").value = cinema));
  handleTimeChange((document.getElementById("movie").value = movie));
  document.getElementById("time").value = time;
  document.getElementById("no_sit").value = sit;
  document.getElementById("price").value = price;

  // const TimeData = JSON.parse(time);
  // console.log(TimeData);

  // document.getElementById("all-times").innerHTML = "";

  // for (let i = 0; i < TimeData.length; i++) {
  //   handleTime(TimeData[i]);
  // }

  update = id;
  togglePopup();
};

window.onload = function () {
  display_cinema();
  display_sit_data();
};

const sitForm = document.getElementById("sit_form");
sitForm.addEventListener("submit", function () {
  sit_data();
});
