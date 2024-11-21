let update = null;

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

      let print = '';
  
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

    const options = document.getElementById("xyz").value
    console.log(options);

    try {
      const response = await fetch("http://localhost:3000/Movies");
  
      if (!response.ok) {
        throw new Error("Error" + response.statusText);
      }
  
      const data = await response.json();
      console.log(data);

      let print = '';

      const F_data = data.filter((v) => v.cinema_id === options)
      console.log(F_data);
      
      F_data.map((v)=> {
        print += `
              <option value = "${v.id}">${v.name}</option>
              
              `;
              document.getElementById("movie").innerHTML = print;
      })

    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (RNo) => {
    // event.preventDefault();
    const Btndel = document.getElementById("row-"+ RNo)
    Btndel.remove()
  }

  const handleTime = (v) => {
    event.preventDefault();

    const MainDiv = document.getElementById("all-times")

    const RNo = Math.floor(Math.random() * 1000)

    const divEle = document.createElement("div")
    divEle.setAttribute("id","row-"+ RNo )

    const InpEle = document.createElement("input")
    InpEle.setAttribute("type","time")
    InpEle.setAttribute("name","timeD")
    InpEle.setAttribute("value",v)

    const plusBtn = document.createElement("button")
    plusBtn.setAttribute("onclick","handleTime()")
    plusBtn.textContent = "+"

    divEle.appendChild(InpEle);
    divEle.appendChild(plusBtn);

    if(MainDiv.children.length >= 1){
      const minusBtn = document.createElement("button")
      minusBtn.setAttribute("onclick",`handleRemove(${RNo})`)
      minusBtn.textContent = "-"
      divEle.appendChild(minusBtn);
    }

    MainDiv.appendChild(divEle)

  }

  const handleTimes = async () => {
    const times = document.getElementsByName("timeD");
    const st_data = document.getElementById("st_data").value
    const ed_data = document.getElementById("ed_data").value
    const id = document.getElementById("xyz").value
    const id2 = document.getElementById("movie").value

    let Time_Array = [];

    for(let i=0; i<times.length; i++){
      Time_Array.push(times[i].value)
    }

    console.log(Time_Array);
    
    let obj = {
      Cinema_id : id,
      Movie_id : id2,
      Start_Date :st_data,
      End_Date : ed_data,
      time: Time_Array
    }

    if(update){
      const response = await fetch("http://localhost:3000/Times/" + update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Cinema_id: document.getElementById("xyz").value,
          Movie_id: document.getElementById("movie").value,
          Start_Date: document.getElementById("st_data").value,
          End_Date: document.getElementById("ed_data").value,
          time: document.getElementsByName("timeD")
        }),
      });
    }else{
      try {
        await fetch ("http://localhost:3000/Times",{
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(obj),
       }) 
 
     } catch (error) {
       console.log(error);
 
     }
    }
  }

  const handleTimeDis = async () => {

    try {
      let response = await fetch ("http://localhost:3000/Times");
      let response1 = await fetch ("http://localhost:3000/Cinema");
      let response2 = await fetch ("http://localhost:3000/Movies");

      const data = await response.json();
      console.log(data);

      const data1 = await response1.json();

      const data2 = await response2.json();

      let print = `  <table border="1">
        <tr>
          <th>Cinema Name</th>
          <th>Movie Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Time</th>
          <th>Action</th>
        </tr>
      `

      data.map((v)=>{
        print+= `
           <tr>
              <td>${data1.find((v1)=> v1.id === v.Cinema_id).name}</td>
              <td>${data2.find((v2)=> v2.id === v.Movie_id).name}</td>
              <td>${v.Start_Date}</td>
              <td>${v.End_Date}</td>
              <td>${v.time.toString()}</td>
              <td><button onclick=handleEdit('${v.id}','${v.Cinema_id}','${v.Movie_id}','${v.Start_Date}','${v.End_Date}','${JSON.stringify(v.time)}')>Edit</button>    <button  onclick="handleDelete('${v.id}')">Delete</button></td>
           </tr>
        `
      })

      print+=`</table>`;

      document.getElementById("display_time").innerHTML = print;
      
    } catch (error) {
      console.log(error);  
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch ("http://localhost:3000/Times/" + id , {
        method: "DELETE",
      })
      
    } catch (error) {
      console.log(error);   
    }
  }

  const handleEdit = async (id,cinema,movie,Start,End,time) => {
      document.getElementById("xyz").value = cinema;
      handleChange(document.getElementById("movie").value = movie)
      document.getElementById("st_data").value = Start;
      document.getElementById("ed_data").value = End;
      document.getElementsByName("timeD").value = time

      const TimeData = JSON.parse(time)
      console.log(TimeData);

      document.getElementById("all-times").innerHTML = "";

      for(let i=0; i<TimeData.length; i++){
        handleTime(TimeData[i])
      }
      
    update = id;
    togglePopup()
  }

  window.onload = function () {
    display_cinema();
    handleTimeDis();
  };

const timesForm = document.getElementById("Time_form")
timesForm.addEventListener("submit",function(){
  handleTimes()
})

 