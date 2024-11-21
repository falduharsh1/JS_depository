let update = null;

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

function navigateTo(page) {
  window.location.href = page;
}

const data_Disp = async () => {
    try {
      const response = await fetch("http://localhost:3000/Cinema");
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      console.log(data);
  
      let print = `<table border="1">
          <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Phone Number</th>
             <th>Address</th>
             <th>Action</th>
          </tr>
          `;
  
      data.map((v) => {
        print += `
                  <tr>
                      <td>${v.name} </td>
                      <td>${v.email} </td>
                      <td>${v.Phone_number} </td>
                      <td>${v.Address} </td>
                      <td><button onclick="handleEdit('${v.id}','${v.name}','${v.email}','${v.Phone_number}','${v.Address}')">Edit</button>    <button onclick="handleDelete('${v.id}')">Delete</button></td>
                  </tr>
              `;
      });
  
      print += `</table>`;
  
      document.getElementById("displlay").innerHTML = print;
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id,name,email,Phone_number,Address) => {
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("Phone_number").value = Phone_number;
    document.getElementById("Address").value = Address;

    update = id;
    togglePopup();
  }
  
  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/Cinema/" + id, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Error in delete" + response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = async () => {
    try {
        // name = document.getElementById("name").value
        // email =document.getElementById("email").value

      let ObjData = {
        name: name,
        email : email,
        Phone_number : Phone_number,
        Address
      };
  
      if(update){
        const response = await fetch("http://localhost:3000/Cinema/" + update, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            Phone_number: document.getElementById("Phone_number").value,
            Address: document.getElementById("Address").value,
          }),
        });
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }
       
      }else{
        const response = await fetch("http://localhost:3000/Cinema", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            Phone_number: document.getElementById("Phone_number").value,
            Address: document.getElementById("Address").value,

          }),
        });
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }
      }
  
    } catch (error) {
      console.log(error);
    }
  };

  let userData = document.getElementById("Movie_form");

  userData.addEventListener("submit", handleData);

  window.onload = function () {
    data_Disp();    
  };