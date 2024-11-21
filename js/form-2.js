// class form {
//     constructor(){
//        this.name =  document.getElementById('name');
//        this.age =  document.getElementById('age')
//     }

//     handleForm(){
//         event.preventDefault();
//         console.log("submit",this.name.value,this.age.value );

//         if(this.name.value  === '' ){
//             document.getElementById('error_name').innerHTML = "Please enter your Name"
//          }else{
//             const regexpName = /^[a-zA-Z ]{2,30}$/;
//              if(regexpName.test(this.name.value )){
//                 document.getElementById('error_name').innerHTML = '';
//          }else{
//            document.getElementById('error_name').innerHTML = 'Please Enter Valid Full Name';
//           }
//          }

//          if(this.age.value === ''){
//                 document.getElementById('error_age').innerHTML = "Please enter your age"
//          }else{
//                 if(this.age.value >= 0 && this.age.value <= 100 ){
//                       document.getElementById('error_age').innerHTML = " "
//                  }else{
//                      document.getElementById('error_age').innerHTML = "Please enter valid age"
//                 }
//             }
//      }

// }

// const f = new form

// const forms = document.getElementById('simple_form')

// forms.addEventListener("submit",function () {
//     f.handleForm()
// })

let update = null;

const handleData = async () => {
  try {
    let ObjData = {
      name: name,
      age,
    };

    if(update){
      const response = await fetch("http://localhost:3000/user/" + update, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
        }),
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // const data = await response.json();
      // console.log(data);

    }else{
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
        }),
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // const data = await response.json();
      // console.log(data);
    }

    // const response = await fetch("http://localhost:3000/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: document.getElementById("name").value,
    //     age: document.getElementById("age").value,
    //   }),
    // });

    // if (!response.ok) {
    //   throw new Error(response.statusText);
    // }
    // const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = async (id,name,age) => {
  document.getElementById("name").value = name;
  document.getElementById("age").value = age

  update = id;
}

const handleDelete = async (id) => {
  try {
    const response = await fetch("http://localhost:3000/user/" + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error in delete" + response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

const data_Disp = async () => {
  try {
    const response = await fetch("http://localhost:3000/user");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    console.log(data);

    let print = `<table border="1">
        <tr>
           <th>Name</th>
           <th>Age</th>
           <th>Action</th>
        </tr>
        `;

    data.map((v) => {
      print += `
                <tr>
                    <td>${v.name} </td>
                    <td>${v.age} </td>
                    <td><button onclick="handleEdit('${v.id}','${v.name}','${v.age}')">Edit</button><button onclick="handleDelete('${v.id}')">Delete</button></td>
                </tr>
            `;
    });

    print += "</table>";

    document.getElementById("disp").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

let userData = document.getElementById("simple_form");

userData.addEventListener("submit", handleData);

window.onload = function () {
  data_Disp();
};

// const DataValidation = () => {
//     event.preventDefault();
//         console.log("submit",name,age );

//         if(name === '' ){
//             document.getElementById('error_name').innerHTML = "Please enter your Name"
//          }else{
//             const regexpName = /^[a-zA-Z ]{2,30}$/;
//              if(regexpName.test(name )){
//                 document.getElementById('error_name').innerHTML = '';
//          }else{
//            document.getElementById('error_name').innerHTML = 'Please Enter Valid Full Name';
//           }
//          }

//          if(age=== ''){
//                 document.getElementById('error_age').innerHTML = "Please enter your age"
//          }else{
//                 if(age >= 0 && age <= 100 ){
//                       document.getElementById('error_age').innerHTML = " "
//                  }else{
//                      document.getElementById('error_age').innerHTML = "Please enter valid age"
//                 }
//             }
//      }
