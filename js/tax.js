const sal = parseInt(prompt("please enter your salary :"));

let s1,s2,s3,s4,s5,s6;

if (sal >= 0 && sal <= 300000 ) {
   s1=0;
   s2=0;
   s3=0;
   s4=0;
   s5=0;
   s6=0;
} else if (sal >= 300000 && sal <= 600000) {
    s1=0;
    s2=(sal -300000)* 0.05;  
} else if (sal >= 600000 && sal <= 900000) {
    s1=0;
    s2=300000*0.05;
    s3=(sal-600000)*0.10;
} else if (sal >= 900000 && sal <= 1200000) {
    s1=0;
    s2=300000*0.05;
    s3=300000*0.10;
    s4=(sal-900000)*0.15;
} else if (sal >= 1200000 && sal <= 1500000) {
    s1=0;
    s2=300000*0.05;
    s3=300000*0.10;
    s4=300000*0.15;
    s5=(sal-1200000)*0.20;
} else if (sal >= 1500000) {
    s1=0;
    s2=300000*0.05;
    s3=300000*0.10;
    s4=300000*0.15;
    s5=300000*0.20;
    s6=(sal-1500000)*0.30;
} 

console.log("s1",s1);
console.log("s2",s2);
console.log("s3",s3);
console.log("s4",s4);
console.log("s5",s5);
console.log("s6",s6);

const total = s1+s2+s3+s4+s5+s6;


document.getElementById("s1").innerHTML=s1;
document.getElementById("s2").innerHTML=s2;
document.getElementById("s3").innerHTML=s3;
document.getElementById("s4").innerHTML=s4;
document.getElementById("s5").innerHTML=s5;
document.getElementById("s6").innerHTML=s6;
document.getElementById("total").innerHTML= total;



