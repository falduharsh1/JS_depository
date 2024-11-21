//synchronize : execute process one after another , in order

// const FirstProcess = () => {
//     console.log("i am first process");  
// }

// const secondProcess = () => {
//     console.log("i am second process");  
// }

// const thirdProcess = () => {
//     console.log("i am third process");  
// }

// FirstProcess();
// secondProcess();
// thirdProcess();

//-------------------------------------

//synchronize problem

// const FirstProcess1 = () => {
//     console.log("i am first process");  
// }

// const secondProcess2 = () => {
//     const d = new Date();

//     while(new Date () - d < 3000 ){

//     }

//     console.log("i am second process");  
// }

// const thirdProcess3 = () => {
//     console.log("i am third process");  
// }

// FirstProcess1();
// secondProcess2();
// thirdProcess3();

//-------------------------------------

//Asynchronize

//callback function

// const add = (x,y,callback) => {     //2
//     let res;
//     res = x+y;
//     callback(res)       //3
// }

// const display = (data) => {     //4
//     console.log(data);
// }

// add(10,20,display)      //1

//-------------------------------------

//callback  function is called after working on some task

// console.log("start program");

// const fetchData = (callback) => {
//     setTimeout(() => {
//         let data = {id : 101 , name : 'harsh',age : 18}
//         callback(data)
//     },3000)
// }

// const dis = (d) => {
//     console.log(d); 
// }

// fetchData(dis)

// console.log("in program");

//-------------------------------------

//promises have two main methods for handling the result of Asynchronize operations

// then()
// catch()
// finally()

//promises is Asynchronize

// console.log("program is start");

// const mypromise = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         try {
//             let data = {id : 101 , name : 'harsh',age : 18}
//         resolve(data)
//         } catch (error) {
//             reject(error)
//         }
//     },3000)
// })

// mypromise
//     .then((d) => console.log(d))
//     .catch((error) => console.log(error))
//     .finally(console.log("Fetching process"))

//     console.log("in the program");
    

// Example of Callback Hell

// const firstCall = (a,callback) => {
//     setTimeout(() => {
//         let ans = a+20;
//         callback(ans)
//     },1000)
// }

// const secondCall = (a,callback) => {
//     setTimeout(() => {
//        let ans = a*5 ;
//         callback(ans)
//     },1000)
// }

// const thirdCall = (a,callback) => {
//     setTimeout(() => {
//        let ans = a-100 ;
//         callback(ans)
//     },1000)
// }

// firstCall(10,function(r1){
//     console.log(r1);

//     secondCall(r1,function(r2){
//         console.log(r2);
//         /
//         thirdCall(r2,function(r3){
//             console.log(r3);
//         })
//     })
// })

// const firstCall = (a) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             let ans = a+20;
//             resolve(ans)
//         },1000)
//     })  
// }

// const secondCall = (a) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             let ans = a*5;
//             resolve(ans)
//          },1000)
//     })
// }
// const thirdCall = (a) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             let ans = a-100;
//             resolve(ans)
//          },1000)
//     })
// }

// firstCall(10)
//     .then((r1) => {console.log(r1) ; return secondCall(r1)})
//     .then((r2) => {console.log(r2) ; return thirdCall(r2)})
//     .then((r3) => console.log(r3) )
//     .catch((Error) => console.log(Error))

//---------------------------------------------------
//api

console.log("program start...");

const fetchData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok){
            throw new Error("error in fetching data");
        }

        const data = await response.json();
        console.log(data); 

    } catch (error) {
        console.log(error);
    }
}

fetchData();

console.log("in the program");


