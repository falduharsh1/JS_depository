let emp_arr = [];

let update = null;

const handlesearchsort = () => {
    let ser = document.getElementById('search').value;
    
    let f_data = emp_arr.filter((v) => 
        v.name.toLowerCase().includes(ser.toLowerCase()) ||
        v.jd.includes(ser) ||
        v.sal.includes(ser)      
)
    console.log(f_data);

    let sdata = document.getElementById("sorting").value;

    if(sdata){
    let sort_data = f_data.sort((a,b) => {
     if(sdata === 'a_z'){
         return a.name.localeCompare(b.name);
     }else if(sdata === 'z_a'){
         return b.name.localeCompare(a.name);
     }else if(sdata === 'l_h'){
         return parseInt(a.sal) - parseInt(b.sal);
     }else if(sdata === 'h_l'){
         return parseInt(b.sal) - parseInt(a.sal);
     }
    })
 
    display(sort_data);
    }

    display(f_data);

}

const handleedit = (i) => {

    console.log(i,emp_arr,emp_arr[i]);
    document.getElementById('name').value = emp_arr[i].name;
    document.getElementById('jd').value = emp_arr[i].jd;
    document.getElementById('sal').value = emp_arr[i].sal;

    update = i;
}

const display = (f_data = []) => {

    let final_data = f_data.length > 0 ? f_data : emp_arr;
    console.log(final_data);
    

    print = `

        <table border="1">
        <tr>
            <th>Name</th>
            <th>Joining Date</th>
            <th>Salary</th>
            <th>Action</th>
        </tr>

         `;

         final_data.map((v,i) => {
         print +=` <tr>
            <td>${v.name}</td>
            <td>${v.jd}</td>
            <td>${v.sal}</td>
            <td><button onclick="handledelete(${i})">Delete</button><button onclick = handleedit(${i})>Edit</button></td>
        </tr>
        `
        })

        print +=  '</table>';
        
    document.getElementById('disp').innerHTML = print;
}

const handledelete = (i) => {

    emp_arr.splice(i,1)
    console.log(emp_arr);
    

    display();
    
}

const handlesubmit = () => {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const jd = document.getElementById('jd').value;
    const sal = document.getElementById('sal').value;

    
    let form_submit = true;

    if(name === ''){
        form_submit = false;
        document.getElementById('NameError').innerHTML = 'Please Enter Full Name';
    }else{
        const regexpName = /^[a-zA-Z ]{2,30}$/;
        if(regexpName.test(name)){
            document.getElementById('NameError').innerHTML = '';
        }else{
            form_submit = false;
            document.getElementById('NameError').innerHTML = 'Please Enter Valid Full Name';
        }  
    }

    if(jd === ''){
        form_submit = false;
        document.getElementById('JoinError').innerHTML = 'Please Select Date';
    }else{
            document.getElementById('JoinError').innerHTML = ''; 
    }

    if(sal === '' ){
        form_submit = false;
        document.getElementById('SalError').innerHTML = 'Please Enter Salary';
    }else{
        if(sal < 0){
            form_submit = false;
            document.getElementById('SalError').innerHTML = 'please enter valid salary'; 
        }else{
            document.getElementById('SalError').innerHTML = ''; 
        }
           
    }

    if(form_submit){
        let object = {
            name,
            jd,
            sal
        }
    
        if(update === 0 || update != null){
            console.log("update...",update);   
            emp_arr[update] = object;
        }else{
            console.log("add...");
            emp_arr.push(object);  
        }
    
        update = null;
    
        document.getElementById('name').value = '';
        document.getElementById('jd').value = '';
        document.getElementById('sal').value = '';
    
        display();    

        return form_submit;
    }
}
