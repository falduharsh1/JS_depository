const handleTime = async () => {
    try {
        const response = await fetch ("http://localhost:3000/Times")

    const data = await response.json();
    console.log(data);

    let cinema = localStorage.getItem("Cinema_id");
    let movie = localStorage.getItem("Movie_id");

    let objj = data.find((v) => v.Cinema_id === cinema && v.Movie_id === movie);

    console.log(objj.time);

    let print= ``
    
    objj.time.map((v) => {
        print += `
        <div class="cinema-card">    
            <div class="cinema-details">
            <h2 class="cinema-title">${v}</h2>
            <a href="user_sit.html" ><button class="book-btn2" onclick=handleClick('${v}')>Book Now</button></a>
        </div>
        </div>
    `;
    })

    print += ``;

    document.getElementById("cinema_grid").innerHTML = print;

    } catch (error) {
        console.log(error); 
    }
}

const handleClick = (t) => {
    console.log(t);
    
    window.location.href = "user_sit.html";

    localStorage.setItem("Movie_Time",t)
}

window.onload = function () {
    handleTime()
}