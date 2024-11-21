const Finsih_site = () => {
    event.preventDefault()
    console.log("hi");

    let m_name = localStorage.getItem("Movie_name")
    let m_date = localStorage.getItem("Movie_Date")
    let m_time = localStorage.getItem("Movie_Time")

    let print = `
     <table border="1">
    
        <tr>
         
           <td>Movie Name</td>
           <td>Movie Date</td>
           <td>Movie Time</td>
        </tr>
    `

    print+=`
        <tr>
            <td>${m_name}</td>
            <td>${m_date}</td>
            <td>${m_time}</td>
            
        </tr>
    `

    print += '</table>';

    document.getElementById("last").innerHTML = print;
    
}

window.onload = function (){
    Finsih_site()
}