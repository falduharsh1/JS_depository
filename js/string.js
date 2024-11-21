let s = 'Hello'
console.log(typeof s);      /*string*/

let s1 = new String('Hello')
console.log(s1);            /*String{'Hello'}*/
console.log(typeof s1);     /*object*/

let name = 'amit';
let s2 = `My name is:${name}`   /*Template literals*/

console.log('3'+ 5 + 7);        /*357*/
console.log(2 + 3 + '6' + 5 + 1);     /*5651*/   /*string coercion falsy value*/

console.log('amit' > 'ajay');       /*true*/
console.log(name.length);       /*4*/

// --------------------------------------------------

//concat
let t = 'Hello';
let t1 = 'JavaScript!'
let result = t.concat(' ',t1)

console.log(result);

// --------------------------------------------------

//includes
let a = 'Hello,my name is harsh';
let result1 = a.includes('harsh')
let result2 = a.includes('het')

console.log(result1);       //true
console.log(result2);       //false

// --------------------------------------------------

//indexOf
let str = "JavaScript is fun";
let result3 = str.indexOf("is")     //11

console.log(result3);    

// --------------------------------------------------

//startswith
let text = "Hello world, welcome to the universe.";
let result4 = text.startsWith("Hello")

console.log(result4);       //true  

// --------------------------------------------------

//endsWith

let text1 = "Hello world, welcome to the universe";
let result5 = text1.endsWith("the")

console.log(result5);       //false  

// --------------------------------------------------

//slice
let text2 = "Hello world!";
let result6 = text2.slice(0, 5);

console.log(result6);       //Hello

//slice allow negative index , negative index (-1) start at last character
let r= text2.slice(-6, -1);
console.log(r);     //world

// --------------------------------------------------

//substring
let text4 = "Hello world!";
let result8 = text4.substring(1, 4);

console.log(result8);      //ell

//it swaps start and end if start > end
//does not suport negative indexing , Negative values are treated as 0

let r1 = text4.substring(5, 0);

console.log(r1);        //Hello

// --------------------------------------------------

//substr
let text3 = "Hello world!";
let result7 = text3.substr(0, 5);

console.log(result7);      //Hello    

//uses a strat position and a length
let r3 = text3.substr(-6, 5);
console.log(r3);     //world

// --------------------------------------------------

//replace
let text5 = "Visit Microsoft!";
let result9 = text5.replace("Microsoft", "India");

console.log(result9);      //Visit India!

// --------------------------------------------------

//replaceAll
let text6 = "I love Cats. Cats are very easy to love. Cats are very popular."
text = text6.replaceAll("Cats","Dogs");

console.log(text);

// --------------------------------------------------




