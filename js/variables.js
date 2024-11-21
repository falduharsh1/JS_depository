//var
//we can declare same name variable 
// var x = 10;
// var x = 20;
// console.log(x);

//var does not have any block scope
// var x=10;
// {
//     var x=20;
// }
// console.log(x);

//let
//we can not redeclare the same name variable
// let x=10;
// let x=20;
// console.log(x);

//let have block scope
// let x=10;
// {
//     let x=20;
// }
// console.log(x);


// let x;  declare
// x=10;   initialize
// console.log(x);

// let x=10;
// x=x+5;
// console.log(x);

// const
// we can not redeclare the same name variable
// const x=10;
// const x=20;
// console.log(x);

//we can not change the value of const variable
// const x=10;
// x=x+5;
// console.log(x); ---> eroor

//declration and initialization must be done at same time
// const x;
// x=10;
// console.log(x); ---> error

// condt have a block Scope
// condt x=10;
// {
//     const x=20;
// }
// console.log(x);

// var x=10;
// let x=20;
// const x=30;
// console.log(x); ---> eoor

// let x=10;   (globle variable)
// {
//     x=x+5;
// }
// console.log(x);  ---> 15

// {
//     let x=10;   (local variable)
// }
// x=x+5;
// console.log(x); ---> error

// console.log(Number.isFinite(10/0));

// console.log(Number.isInteger(10/3));

// let x = 'harsh';

// console.log(isNaN(x));

// let y = 10;

// console.log(y.toString());

// let z = 15.65466;

// console.log(z.toFixed(2));

let d = new Date;
console.log(d);

d.setMonth(0);
console.log(d);

d.setDate(4);
console.log(d);

console.log(d.getMonth()+1);

console.log(d.getDate());

console.log(d.getFullYear());

console.log(d.getHours());

const b = new Date ();

console.log(b.toLocaleTimeString());

console.log(b.toLocaleDateString());

console.log(b.getDate() + "-" + (b.getMonth()+1) + "-" +b.getFullYear() );
















