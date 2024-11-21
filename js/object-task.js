//  1. Check ‘percentage’ key is available or not in obj1.
let obj1 = {
    id: 101,
    name: 'amit',
    city: 'surat'
 }

for(let k in obj1){
    if(k === 'percentage'){
        console.log("percentage key is available");
    }else{
        console.log("percentage key is not available");
    }
}

//  2. Add new property favColor: ‘blue’ in object.

let obj2 = {
    id: 101,
    name: 'amit',
    city: 'surat'
 }

obj2.favColor = 'blue'
console.log(obj2);


//  3. Change city to ‘vapi’
let obj3 = {
        id: 101,
        name: 'amit',
        city: 'surat'
     }

     obj3.city = 'vapi'  ;
     console.log(obj3);
     

//  4. Convert all property to array.
let obj4 = {
        id: 101,
        name: 'amit',
        city: 'surat'
     }

     let ans = Object.entries(obj4);
     console.log(ans);
     

//  5. Delete ‘city’ property from obj1.
let obj5 = {
    id: 101,
    name: 'amit',
    city: 'surat'
 }

 delete obj5.city ;
 console.log(obj5);
 
 
//  1. Display all data in table format
// let arr4 = [
//     {id: 1, name: 'mobile', price: 8000, qty: 20},
//     {id: 2, name: 'laptop', price: 50000, qty: 3},
//     {id: 3, name: 'book', price: 120, qty: 60},
//     {id: 4, name: 'botle', price: 50, qty: 10},
//     {id: 5, name: 'ac', price: 35000, qty: 2}
//  ]




//  2. Remove botle data from arr4
// let arr4 = [
//     {id: 1, name: 'mobile', price: 8000, qty: 20},
//     {id: 2, name: 'laptop', price: 50000, qty: 3},
//     {id: 3, name: 'book', price: 120, qty: 60},
//     {id: 4, name: 'botle', price: 50, qty: 10},
//     {id: 5, name: 'ac', price: 35000, qty: 2}
//  ]

//  ans = arr4.filter(value => value.name !=='botle')
//  console.log(ans);
 


//  3. Search ‘ac’ is available or not in arr4
// let arr4 = [
//     {id: 1, name: 'mobile', price: 8000, qty: 20},
//     {id: 2, name: 'laptop', price: 50000, qty: 3},
//     {id: 3, name: 'book', price: 120, qty: 60},
//     {id: 4, name: 'botle', price: 50, qty: 10},
//     {id: 5, name: 'ac', price: 35000, qty: 2}
//  ]

// arr4.map((v,i) => {
//     for(let k in arr4){
//         for(let k1 in arr4[k]){
//             if(!k1 === 'freze'){
//                 console.log("ac is not available");
//             }else{
//                 console.log("ac is available");
//             }
//         }
//     }
// })

// let ans1 = arr4.find((v) => v.name === 'ac')

// if(ans1){
//     console.log("ac is  available");
// }else{
//     console.log("ac is not available");
// }

//  4. Only Increase qty of laptop to 5.
// let arr4 = [
//     {id: 1, name: 'mobile', price: 8000, qty: 20},
//     {id: 2, name: 'laptop', price: 50000, qty: 3},
//     {id: 3, name: 'book', price: 120, qty: 60},
//     {id: 4, name: 'botle', price: 50, qty: 10},
//     {id: 5, name: 'ac', price: 35000, qty: 2}
//  ]



//  5. Give list of all products that have price more than 20000.
let arr4 = [
    {id: 1, name: 'mobile', price: 8000, qty: 20},
    {id: 2, name: 'laptop', price: 50000, qty: 3},
    {id: 3, name: 'book', price: 120, qty: 60},
    {id: 4, name: 'botle', price: 50, qty: 10},
    {id: 5, name: 'ac', price: 35000, qty: 2}
 ]

let ans2 = arr4.find((v)=> v.price > 20000)
console.log(arr4);

const handlesubmit () => {
    
} 
