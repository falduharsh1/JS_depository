let stud_arr = []

let update = null;

const handlesearchsort = () => {
   let data = document.getElementById('searching').value;
   console.log(data,stud_arr);
   

    let sdata = stud_arr.filter((v) =>
        v.name.toLowerCase().includes(data.toLowerCase()) ||
        v.num.includes(data)||
        v.course.toLowerCase().includes(data.toLowerCase())||
        v.fee.includes(data)
    )

    let sort_data = document.getElementById('choice').value;

    sdata.sort((a,b) => {
        if(sort_data === 'a_z'){
            return a.name.localeCompare(b.name)
        }else if (sort_data === 'z_a'){
            return b.name.localeCompare(a.name)
        }else if(sort_data === 'r_l'){
            return a.num.localeCompare(b.num);
        }else if (sort_data === 'r_h') {
            return b.num.localeCompare(a.num)
        }else if(sort_data === 'l_h'){
            return parseInt(a.fee) - parseInt(b.fee)
        }else if(sort_data === 'h_l'){
            return parseInt(b.fee) - parseInt(a.fee)
        }
    })
    
    display(sdata);
}

const display = (sdata = []) => {

    let final_data = sdata.length > 0 ? sdata : stud_arr;

    print = `
    <table border="1">
        <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Course</th> 
            <th>Fees</th>
            <th>Actions</th>        
        </tr>
    
    `;

    final_data.map((v,i) => {
        print+= `
            <tr>
              <td>${v.name}</td>
              <td>${v.num}</td>
              <td>${v.course}</td>
              <td>${v.fee}</td>  
              <td><button onclick ="handleedit(${i})">Edit</button><button onclick ="handledelete(${i})">Delete</button></td>
            </tr>
        
        `;
    })

    print+= '</table>'
   
    document.getElementById("disp").innerHTML = print;
}

const handleedit = (i) => {

    console.log(i,stud_arr,stud_arr[i]);
   
    document.getElementById('name').value = stud_arr[i].name;
    document.getElementById('num').value = stud_arr[i].num;
    document.getElementById('course').value = stud_arr[i].course;
    document.getElementById('fees').value = stud_arr[i].fee;

    update=i;
    
}

const handledelete = (i) => {
    stud_arr.splice(i,1)
    console.log(stud_arr);

    display();
}

const handlesubmit = () => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const numr = document.getElementById('num').value;
    const course = document.getElementById('course').value;
    const fees = document.getElementById('fees').value;

    let object = {
        name: name,  
        num: numr,
        course: course,
        fee: fees
    };

    if(update === 0 || update != null){
        console.log("update...",update);  
        stud_arr[update]=object
    }else{
        console.log("add...");
        stud_arr.push(object)
    }

    update=null;

    document.getElementById('name').value = '';
    document.getElementById('num').value= '';
    document.getElementById('course').value = '';
    document.getElementById('fees').value = '';

    display();
}