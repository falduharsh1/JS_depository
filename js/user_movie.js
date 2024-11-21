const cinema_dis = async () => {
  try {
    const response1 = await fetch("http://localhost:3000/Cinema");

    const data1 = await response1.json();
    console.log(data1);

    let print = `
        `;

    data1.map((v) => {
      print += `
                <div class="cinema-card">    
                    <div class="cinema-details">
                    <h2 class="cinema-title">${v.name}</h2>
                        <button class="book-btn2">Book Now</button>
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

const movie_dis = async () => {
  try {
    const response = await fetch("http://localhost:3000/Movies");

    const data = await response.json();
    console.log(data);

    let UniqueName = data.filter(
      (v, index, self) => index === self.findIndex((t) => t.name === v.name)
    );

    console.log(UniqueName);

    let print = `     
       `;
    UniqueName.map((v) => {
      print += `

            <div class="movie-card">
                    <div class="movie-details">
                        <h2 class="movie-title">${v.name}</h2>
                        <img src="img/${v.Images}"  width="250px" height="300px"</img>
                        <a href="user_cinema.html"><button class="book-btn" onclick=handleClick('${v.name}')>Book Now</button></a>
                    </div>
            </div>
        `;
    });

    print += "";

    document.getElementById("movie_grid").innerHTML = print;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const handleClick = async (n) => {
  console.log(n);

  localStorage.setItem("Movie_name", n);
  localStorage.getItem("Movie_name");

  try {
    const response = await fetch("http://localhost:3000/Movies");

    const data = await response.json(); 
    console.log (data);  

    localStorage.setItem("Movie_name", n);
    localStorage.getItem("Movie_name");
    
   let f_data =  data.filter((v) => v.data)
   console.log(f_data);
   
  } catch (error) {
    console.log(error);
  }
};

const movieData = async (n) => {
    
  
};

window.onload = function () {
  cinema_dis();
  movie_dis();
  movieData();
};
