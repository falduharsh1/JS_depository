const handleDate = async () => {
  event.preventDefault()
  try {
    const response = await fetch("http://localhost:3000/Times");

    const data = await response.json();
    console.log(data);

    let cinema = localStorage.getItem("Cinema_id");
    let movie = localStorage.getItem("Movie_id");

    console.log(cinema, movie);

    let objj = data.find((v) => v.Cinema_id === cinema && v.Movie_id === movie);

    console.log(objj.Start_Date);
    console.log(objj.End_Date);

    let print = `     
    `;

    let from = new Date(objj.Start_Date);
    let to = new Date(objj.End_Date);
    
    for (let i = from; i <= to; i.setDate(i.getDate() + 1)) {
      // console.log(i.toLocaleDateString());
      print += `
                <div class="cinema-card">    
                    <div class="cinema-details">
                    <h2 class="cinema-title">${i.toLocaleDateString()}</h2>
                   <a href="user_time.html" ><button class="book-btn2" onclick="handleClick('${i.toLocaleDateString()}')">Book Now</button></a>
                </div>
                </div>
            `;
      }

    print += ``;

    document.getElementById("cinema_grid").innerHTML = print;

  } catch (error) {
    console.log(error);
  }
};

const handleClick = (d) => {
  console.log(d);

  localStorage.setItem("Movie_Date",d)

  window.location.href = "user_time.html";
  
}

window.onload = function () {
  handleDate();
};
