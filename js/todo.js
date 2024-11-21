let todo_array = [];

let update = null

const handleEdit = (i) => {
    console.log(i,todo_array,todo_array[i]);
    document.getElementById('todo').value = todo_array[i];

    update = i;
}

function display () {

    print = '<ul>'

    todo_array.map((v,i)=>{
        print += `
        
        <li>${v}<button onclick="handleEdit(${i})">Edit</button><button onclick="handledelete(${i})">Delete</button></li>
        
        `
    })

    print+= '</ul>'
    
    document.getElementById('task').innerHTML = print;
    
}

const handledelete = (i) => {
    todo_array.splice(i,1);
    console.log(todo_array);
    
    display();
   
} 

const handlesubmit = () => {
    event.preventDefault();

    let todo = document.getElementById('todo').value
    console.log(todo);

    if(update  || update === 0){
        console.log("update ...",todo_array,update);
        todo_array[update]=todo;
        
    }else{
        console.log("add...");
        todo_array.push(todo)
        console.log(todo_array);
    }

    document.getElementById('todo').value = '';
    update=null;

    display();
}


