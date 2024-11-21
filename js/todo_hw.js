todo_array = [];

function display (){

    print = '<ul>'

    todo_array.map((v,i) => {
        print+= `
            <li> ${v} <button onclick="handledelete(${i})"> Delete </button> </li>
        `
    })

    print += '</ul>'

    document.getElementById('display').innerHTML = print ;

}

const handledelete = (i) => {

    todo_array.splice(i,1);
    console.log(todo_array);

    display();
    
}

const handlesubmit = () => {
    event.preventDefault();
  
    let todo =  document.getElementById('todo').value;
    console.log(todo);
  
    todo_array.push(todo);
    console.log(todo_array);

    display();
}