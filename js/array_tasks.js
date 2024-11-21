// //1.Finding the maximum element in an array.

let max = [56,47,36,86,21,6]

let ans = max.sort((a,b) => a-b);
console.log("maximum number is :",ans[max.length-1]);

// //2.Finding the minimum element in an array.

let min = [56,47,36,86,21,6]

let ans1 = min.sort((a,b) => a-b);
console.log("minimum number is :",ans1[0]);

// //3.Sorting an array in ascending order.

let ascen = [1,2,3,4,5,6]

let ans2 = ascen.sort((a,b) => a-b)
console.log("ascending order :",ans2);

// // 4.Sorting an array in descending order.

let descen = [1,2,3,4,5,6]

let ans3 = descen.sort((a,b) => b-a);
console.log("descending order :",ans3);

// // 5.Reversing an array.

let rev = [10,20,30,40,50,60]

let ans4 = rev.reverse();
console.log("reverse :",ans4);

// // 6.Finding the sum of all elements in an array.

let arr = [10,20,30,40,50]

// reduce
let ans5 = arr.reduce((acc,v) => acc+v,0)
console.log("total is :",ans5);

// // 7.Finding the average of all elements in an array.

let ave = [10,20,30,40,50]

let anss = ave.reduce((acc,v) => acc+v,0)
console.log("average is :",anss/ave.length);


// // 8.Checking if an array contains a specific element.
let check = [1,2,3,4,5,6]

// includes
// let ans8 = check.includes(60);
// console.log("elelment is there :",ans8);

//some
let ans8 = check.some((v) => v === 60)
console.log("elelment is there :",ans8);


// // 9.Removing duplicates from an array.
let dub =[1,1,2,3,4,4]

let uniquearr =[]

let ans7 = dub.map((v) =>{
    if(!uniquearr.includes(v)){
        uniquearr.push(v)
    }
})
console.log("remove duplicate",uniquearr);

// // 10.Merging two arrays into a new array.
let arr1 = [1,2,3]
let arr2 = [4,5,6]

let ans6 = arr1.concat(arr2)
console.log("merg is :",ans6);

// // 11.Splitting an array into two arrays based on a condition.
let split = [1,2,3,4,5,6]

let ans9 = split.filter((v)=> v<=3)
console.log(ans9);
let ans_9 = split.filter((v)=> v>3)
console.log(ans_9);

// // 12.Rotating an array by a given number of positions.
 let rotate = [1,2,3,4,5,6]

    for(let i=1; i<=3; i++){
      let ans12 = rotate.pop();
      rotate.unshift(ans12)
    }
    console.log(rotate);

// // 13.Finding the second largest element in an array.
let s_large = [25,63,45,96,21,66]

let ans10 = s_large.sort((a,b) => b-a)
console.log("second largest",ans10[1]);

// // 14.Finding the k-th smallest element in an array.
let small = [56,2,4,669,55,36]

let ans11 = small.sort((a,b)=> a-b)
console.log("smallest",ans11[0]);

// // 15.Finding the median of an array.

let arr3 = [15, 36, 22, 63];

let arr_sort = arr3.sort((a, b) => a - b);
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

// // 16.Checking if two arrays are equal or not.
arey1 = [10,20,30,40]
arey2 = [10,20,30,40]

flag = false

if(arey1.length === arey2.length){
    for(let i=0; i<arey1.length; i++){
        if(arey1[i] != arey2[i]){
            flag = true;
            break;
        }
    }

    if(flag === true){
        console.log("both array are not same");
    }else{
        console.log("both array are same");
    }

}else{
    console.log("both array are not same");
    
}

// // 17.Finding the index of the first occurrence of an element in an array.
let f_occ = [1, 2, 3, 2, 4]

let ans12 = f_occ.indexOf(2)
console.log("first occurrence :",ans12);

// // 18.Finding the index of the last occurrence of an element in an array.
let l_occ = [1, 2, 3, 2, 4,3]

let ans13 = l_occ.lastIndexOf(3)
console.log("last occurrence :",ans13);

// // 19.Removing all occurrences of an element from an array.
let array = [1, 2, 3, 2, 4, 2, 5];

array = array.filter(Element => Element !== 2);
console.log("Removing all occurrences ",array);

// // 20.Replacing all occurrences of an element in an array with a new element.
let new_ele = [10,25,45,41,45,56]

let ans14 = new_ele.map((v) => v == 45 ? 10 : v  )
console.log(ans14);

// 22.Checking if an array is sorted in ascending order.
let acse = [10,6,45,25,65]

flag = false 

for(let i=0; i<acse.length; i++){
    for(let j=i+1; j<acse.length; i++){
        if(acse[i] < acse[j]){
            flag = true;
            break;
        }
    }
}

if(falg === true){
    console.log("array are in ascending order."); 
}else{
    console.log("array are in not ascending order."); 
}

// 23.hecking if an array is sorted in descending order.

let decse = [10,6,45,25,65]

flag = false 

for(let i=0; i<decse.length; i++){
    for(let j=i+1; j<decse.length; i++){
        if(decse[i] > decse[j]){
            flag = true;
            break;
        }
    }
}

if(falg === true){
    console.log("array are in descending order."); 
}else{
    console.log("array are in not descending order."); 
}

// 24.Finding the first three maximum number's sum an array.
let maxi = [10,56,41,3,95]

let ans15 = maxi.sort((a,b) => b-a).slice(0,3).reduce((acc,v) => acc+v ,0)
console.log("first three max",ans15);

