const handleCinema = async () => {
  // console.log("load");
  try {
    const response = await fetch("http://localhost:3000/Movies");

    const data = await response.json();
    console.log(data);

    let m_name = localStorage.getItem("Movie_name");
    console.log(m_name);

    let f_data = data.filter((v) => v.name === m_name);
    console.log(f_data);

    let c_data = f_data.map((v) => v.cinema_id);
    console.log(c_data);

    const response1 = await fetch("http://localhost:3000/Cinema");

    const data1 = await response1.json();
    console.log(data1);

    let x_data = data1.filter((v) => c_data.includes(v.id));
    console.log(x_data);

    let print = `     
       `;

    x_data.map((v) => {
      print += `
                <div class="cinema-card">    
                    <div class="cinema-details">
                    <h2 class="cinema-title">${v.name}</h2>
                    <a href="user_date.html" ><button class="book-btn2" onclick=handleClick('${v.id}','${m_name}')>Book Now</button></a>
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

const handleClick = async (c,m) => {
  event.preventDefault()
  try {
    const response = await fetch("http://localhost:3000/Cinema");

    const data = await response.json();
    console.log(data);

    localStorage.setItem("Cinema_id", c);
    localStorage.setItem("Movie_name",m);

    const response1 = await fetch("http://localhost:3000/Movies");

    const data1 = await response1.json();
    console.log(data1);

    console.log(c,m);
    

    let obj = data1.find((v) => v.name === m && v.cinema_id === c)
    console.log(obj);
    
    localStorage.setItem("Movie_id", obj.id);

    window.location.href = "user_date.html";
  } catch (error) {
    console.log(error);
  }
};

// function redirect() {
//   window.location.href = "";
// }

window.onload = function () {
  handleCinema();
};
