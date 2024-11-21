// Q-1.                           5

// 1.Change 61 to 20.
let arr1 = [10,8,61,31,5]
arr1[2] = 20;
// let ans = arr1.splice(2,1,20)
console.log(arr1);

// 2.Delete 8
let arr2 = [10,8,61,31,5]

let ans1 = arr2.splice(1,1)
console.log(arr2);

// 3.Add 20,30,40 after 10
let arr3 = [10,8,61,31,5]

let ans3 = arr3.splice(1,0,20,30,40)
console.log(arr3);

// 4.Find index of 5
let arr4 = [10,8,61,31,5]

let ans4 = arr4.indexOf(5);
console.log(ans4);

// 5.Search 99 is available or not
let arr5 = [10,8,61,31,5]

let ans5 = arr5.includes(99)
console.log(ans5);

//Q-2                           8

// 1.Combine arr6 and arr7
let arr6 = [10,20,30,40,50];
let arr7 = [6,9,80];

let ans6 = arr6.concat(arr7)
console.log(ans6);

// 2.Get 20, 30, 40 as array from arr8
let arr8 = [10,20,30,40,50];

let ans7 = arr8.slice(1,4)
console.log(ans7);

// 3.Give sum of all element of arr9 using reduce function
let arr9 = [6,9,80];

let ans8 = arr9.reduce((acc,v) => acc+v, 0)
console.log(ans8);

// 4.Check all element is greater than 10 or not from arr10
let arr10 =  [6,9,80];

let ans9 =arr10.every((v) => v>10)
console.log(ans9);

// 5.Sort arr11 in descending order.
let arr11 = [6,9,80];

let ans10 = arr11.sort((a,b) => b-a)
console.log(ans10);

// Q-3                          11

// 1.Removing duplicates from an array.
let arr_4 = [1,1,2,3,3,4,5,5]
uniqueArray = []

let ans12 = arr_4.map((v) =>{
    if(!uniqueArray.includes(v)){
        uniqueArray.push(v)
    }
})
console.log(uniqueArray);

// 2.Finding the median of an array.
let arr_3 = [15, 36, 22, 63];

let arr_sort = arr_3.sort((a, b) => a - b);
console.log(arr_sort);

if (arr_sort.length % 2 == 0) {
    let len = arr_sort.length / 2;
    let lenn = (arr_sort[len] + arr_sort[len-1]) / 2;
    console.log("median", lenn);
} else {
    let mid = Math.floor(arr_sort.length / 2);
    let anss = arr_sort[mid]; 
    console.log("median", anss);
}
// 3.Checking if an array is sorted in ascending order.
let arr_5 = [12,1,58,69]
let flag = false

for(let i=0; i<arr_5.length; i++){
    for(let j=i+1; j<arr_5.length; j++){
        if(arr_5[i] > arr_5[j]){
            flag = true
            break;
        }
    }
}

if(flag == true){
    console.log("array in not ascending order.");
}else{
    console.log("array in ascending order.");
}


// 4.Finding the third largest element in an array.
let arr_1 = [42,15,36,98,25,64]

let ans_1 = arr_1.sort((a,b) => b-a)
console.log(ans_1,arr_1[2]);

// 5.Finding the first three maximum number's sum an array.
let arr_2 = [54,12,65,95,47,58]

let ans_2 = arr_2.sort((a,b) => b-a).slice(0,3).reduce((acc,v) => acc+v,0)
console.log(ans_2);

function handlesubmit (){

}





