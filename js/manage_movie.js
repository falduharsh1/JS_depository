let update = null;

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}

const display_movie = async () => {
  try {
    const response = await fetch("http://localhost:3000/Cinema");

    if (!response.ok) {
      throw new Error("Error" + response.statusText);
    }

    const data = await response.json();
    console.log(data);

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

window.onload = function () {
  display_movie();
};

const handleImages = async () => {
  const movie_name = document.getElementById("name").value;
  const movie_post = document.getElementById("movie_poster")?.files[0]?.name;
  const desc = document.getElementById("Description").value;
  const id = document.getElementById("xyz").value;

  console.log(movie_post);

  let object = {
    cinema_id: id,
    name: movie_name,
    Images: movie_post,
    desc: desc,
  };
  if (update) {
    console.log("update");

    if (movie_post) {
      let response = await fetch("http://localhost:3000/Movies/" + update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
    } else {
      let img = document.getElementById("movie_post").src;
      console.log(img);

      let arr = img.split("/");
      let n_img = arr[arr.length - 1];
      console.log(n_img);

      let response = await fetch("http://localhost:3000/Movies/" + update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...object, Images: n_img }),
      });
    }
  } else {
    try {
      let response = await fetch("http://localhost:3000/Movies/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
};

const movie_post = document.getElementById("Movie_form");
movie_post.addEventListener("submit", function () {
  handleImages();
});

const handleDelete = async (id) => {
  try {
    const response = await fetch("http://localhost:3000/Movies/" + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error in delete" + response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = (id, name, poster) => {
  document.getElementById("name").value = name;
  document.getElementById("movie_post").src = "img/" + poster;

  togglePopup();

  update = id;
};

const HandleImg = () => {
  const movie_post = document.getElementById("movie_poster").files[0].name;
  document.getElementById("movie_post").src = "img/" + movie_post;
};

const handleMovieImg = async () => {
  const options = document.getElementById("xyz").value;
  console.log(options);

  try {
    const response = await fetch("http://localhost:3000/Movies");

    const data = await response.json();
    console.log(data);

    let print = ` <table>
            <tr>
                <th>Movie Name</th>
                <th>cinema Name</th>
                <th>Movie Poster</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        `;

    data.map((v) => {
      print += `
            <tr>
                <td>${v.name}</td>
                <td>${v.cinema_id}</td>
                <td><img src="img/${v.Images}" width="130px" height="150px" /></td>
                <td>${v.desc}</td>
                <td><button onclick="handleEdit('${v.id}','${v.name}','${v.Images}')">Edit</button>    <button onclick="handleDelete('${v.id}')">Delete</button></td>

            </tr>
        `;
    });

    print += `</table>`;

    document.getElementById("displlay").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

window.onload = function () {
  handleMovieImg();
  display_movie();
};
