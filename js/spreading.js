//(spreading operator)

//Array
let arr1 = [10,20,30,40,50]

let arr2 = [...arr1]        //copy
console.log(arr2);

let ans = [99,100,...arr1,'harsh','het']        //merging
console.log(ans);

const [first,second,third,fourth,fifth] = arr1      //destructring
console.log(second);

//------------------------------------------

//object
let obj = {
    id : 101,
    name : 'amit',
    age : 18
}

let obj1 = {...obj}      //copy
console.log(obj1);

let obj2 = {        //merging
    id : 100,       //not change  
    ...obj,
    city : 'surat',     //add
    name : 'Harsh'      //replace with amit
}
console.log(obj2);

const { id, name, age } = obj
console.log(name);

