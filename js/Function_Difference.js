//1.Normal Function

function NormalFunction () {
    //function body
}

//Arrow Function
const ArrowFunction = () => {
    //function body
}

//-----------------------------------

//2.this keyword
// const NormalObj = {
//     value : 42,
//     NF : function () {
//         console.log(this.value);    
//     } 
// }

// NormalObj.NF()      //42

// const ArrowObj = {
//     value : 42,
//     AF : () => {
//         console.log(this.value);    
//     } 
// }

// ArrowObj.AF()       //undefined

//-----------------------------------

//3.Arrow function has no arguments object

// function demo () {
//     console.log(arguments[0],arguments[1]);
    
// }

// demo(10,20)

// const demo1 = () => {
//     console.log(arguments[0],arguments[1]);
    
// }

// demo1(10,20)

//-----------------------------------

//4.Constructor Function

// function student () {
//     this.name = 'harsh'
// }

// const s = new student()
// console.log(s.name);

// const student = () => {
//     this.name = 'harsh'
// }

// const s = new student()
// console.log(s.name);

//-----------------------------------

//5.Arrow functions cannot be accessed before initialization

// sayHello();

// function sayHello () {
//     console.log("Hello");
// }

// sayHello();

// const sayHello = () => {
//     console.log("Hello");
// }

let x = parseInt(prompt("Please enter the value of x:"));
let y = parseInt(prompt("Please enter the value of y:"));

try{
    let ans;

    if(y === 0){
        throw new Error ("divide by zero is not possible")
    }

    ans=x/y;

    console.log(ans);

}catch(e){
    console.log(e);   
}finally{
    console.log("every time run");    
}




