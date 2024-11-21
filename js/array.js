// let roll_num = [10,20,30,40,50]
// console.log(roll_num);

// for(let i=0; i<roll_num.length; i++){
//     console.log(roll_num[i]);
// }

// roll_num.forEach((value,index) => {
//     console.log(index,value);   
// })

// roll_num.map((v,i) =>{
//     console.log(i,v);  
// })

// roll_num.map((v,i) => console.log(i,v));

// let name = new Array ('tirth' , 'harsh' )
//     console.log(name[1]);

// for(let i=0; i<name.){

// }

// function handleclick (){
//     console.log("button clicked"); 
// }

// const handleclick = () => {
//     console.log("button click");
    
// }

// let roll_num = [10,20,30,40,50];

// update
// roll_num[1]=99;
// console.log(roll_num);

//add
// roll_num.push(100);  //add at last
// console.log(roll_num);

// roll_num.unshift(101); //add at first
// console.log(roll_num);

// roll_num.splice(3,0,70,80) //add at anywhere
// console.log(roll_num);

//remove
// let ans= roll_num.pop()  //remove at last
// console.log(roll_num);

// let ans = roll_num.shift()  //remove at first
// console.log(roll_num);


// let ans = roll_num.splice(1,2) //remove anywhere
// console.log(ans,roll_num);

// let data = [15,8,95,"surat",12,"amit"];
// let data1 = [99,100,101];

// let ans = Array.isArray(data);   //check array or not
// console.log(ans);

// let ans = data.concat(data1);    //combine array
// console.log(ans);

// let ans = data.some((v) => v === 12);  //value check
// console.log(ans);                      //return in boolean

// let ans = data.toString();               //convert array into string
// console.log(ans);                         //return string

//------------------------------------------------------------------------

// let numbers = [1,2,3,4,5,6,2]
// let names = ["harsh","tirth","maulick"]

// let sliced = numbers.slice(0, 2);   //return part of array
// console.log(sliced);                // Output: [1, 2]

// let mapped = numbers.map(v => v > 2);   //return array in boolean
// console.log(mapped);               //Output: f,f,t,t,t,t

// let filtered = numbers.filter ((v,i) => v >= 4);  //return array with filtering
// console.log(filtered);                // Output: [4, 5, 6]

// let reduced = numbers.reduce((acc, v,i) => acc + v, 0);  //return accumalator value
// console.log(reduced);                // Output: [21]

// let index = numbers.indexOf(2);      //first occurence of elements index
// console.log(index);                   // Output: [1]

// let lastIndex = numbers.lastIndexOf(2);      //last occurence of elements index
// console.log(lastIndex);                 // Output: [6]

// let allEven = numbers.every((v) => v>10);       //return boolean , check condition for every elemnets
// console.log(allEven);                // Output: [false]

// let includesFour = numbers.includes(40);     //check value is available or not
// console.log(includesFour);              // Output: [false]

// let firstLarge = numbers.findIndex(num => num > 3);  //find element and return its index , not available => -1
// console.log(firstLarge);                // Output: [3]

// let filled = numbers.fill(10, 2, 4);  //replace element with 10 at index 2 and 3
// console.log(filled);              // Output: [1, 2, 10, 10, 5, 6]

// let sorted = numbers.sort((a, b) => b - a);     //number sort  descendind order
// console.log(sorted);          // Output: [6, 5, 4, 3, 2, 2,1]

// let ans = names.sort();         //name sorting
// console.log(ans);    Output: ["harsh","maulick","tirth"]


// let reversed = numbers.reverse();           //reverse array
// console.log(reversed);          // Output: [2, 6, 5, 4, 3, 2, 1]



























    


