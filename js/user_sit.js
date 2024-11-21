let seat = [];

const handleSit = async () => {
  try {
    const response = await fetch("http://localhost:3000/Sit");

    const data = await response.json();
    console.log(data);

    let cinema = localStorage.getItem("Cinema_id");
    let movie = localStorage.getItem("Movie_id");
    let times = localStorage.getItem("Movie_Time");
    let Date = localStorage.getItem("Movie_Date");

    let obj = data.find(
      (v) =>
        v.Cinema_name === cinema && v.Movie_name === movie && v.Time === times
    );
    console.log(obj.sit);
    console.log(Date);

    // console.log(obj.sit[Date]);

    let x = obj.sit[Date];
    console.log(x);

    let print = ``;

    x.map((v, i) => {
      print += ` 
        <div class="cinema-card">    
            <div class="cinema-details">
            <h2 class="cinema-title"></h2>
            <button class="book-btn2" id="S_Btn-${i}" ${v === 1 ? 'disabled' : ''} onclick=handleClick('${i}') >${
        i + 1
      }</button>
        </div>
        </div>  
    `;
    });

    print += ``;

    document.getElementById("cinema_grid").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const handleClick = (i) => {
  let ans = seat.includes(i);
  console.log(ans);

  if (ans) {
    console.log("remove");
    let find = seat.findIndex((v) => v === i);
    console.log(find);

    let sp = seat.splice(find, 1);
    //  console.log(sp);

    document.getElementById("S_Btn-" + i).style.background = "#007bff";
  } else {
    console.log("add");
    let add = seat.push(i);
    console.log(add);

    document.getElementById("S_Btn-" + i).style.background = "#0056B3";
  }
  console.log(seat);  
};

const handleSubmit = async (event,i) => {
  event.preventDefault();
  console.log("submit");

  try {
    const response = await fetch("http://localhost:3000/Sit");

    const data = await response.json();
    console.log(data);

    let cinema = localStorage.getItem("Cinema_id");
    let movie = localStorage.getItem("Movie_id");
    let times = localStorage.getItem("Movie_Time");
    let selectedDate = localStorage.getItem("Movie_Date");

    let obj = data.find(
      (v) =>
        v.Cinema_name === cinema && v.Movie_name === movie && v.Time === times 
    );
    console.log(obj.sit);
    console.log(selectedDate);

    // console.log(obj.sit[Date]);

    let x = obj.sit[selectedDate];
    console.log(x);

  let ans =  x.map((v,i) => {
    return seat.includes(i.toString()) || v == 1 ? 1 : 0 ;
  }) 

  obj.sit[selectedDate] = ans;
  console.log( obj.sit[selectedDate]);

      const response2 = await fetch ("http://localhost:3000/Sit/" + obj.id,{
        method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
      })



     
} catch (error) {
    console.log(error);
  }

  window.location.href = "user_finish.html";
};

window.onload = function () {
  handleSit();
};
