// // Locale scope
// function counter (){
//     let count = 0;          //local variable start with 0 for any call

//     count++;

//     console.log(count);
// }

// counter();    //1
// counter();    //1

//------------------------------

//Global scope
let count = 0;
 
function counter (){
    count++

    console.log(count);
}

count = 10;

// counter();    //1  when count = 0   
// counter();    //2  when count = 0
// counter();    //3  when count = 0

counter();    //11  when count = 10   
counter();    //12  when count = 10  
counter();    //13  when count = 10

//------------------------------

//outer function
function personalInfo(name){
    let age = 18;

    //inner function
    return function ProfInfo(){
        console.log(name);
        console.log(age);
    }
}

let x = personalInfo('Harsh')  //outer function call
console.log(x);     //function

x();    //inner function call

//------------------------------

//outer function
function counterDemo(){
    let count=0;

    //inner function
    return function ProfCount(){
        count++;
        console.log(count);  
    }
}

let res = counterDemo()
console.log(res);

res();  //1
res();  //2
res();  //3 

let res1 = counterDemo()
console.log(res);

res1();  //1
res1();  //2
res1();  //3 

//------------------------------

let Arr1 = [10,20,30,40,50]
let Arr2 = [40,50,60,70,80]

//union
//let ans = [10,20,30,40,50,60,70,80]

let union = [...Arr1]
console.log(union);

Arr2.map((v)=> {
    if(!Arr1.includes(v)){
        union.push(v)
    }
})
console.log(union);

//intersection
//let ans = [40,50]

let ans = Arr1.filter((v) => Arr2.includes(v))
console.log(ans);

