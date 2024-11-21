const gen = prompt("please enter your Gender :");

const sal = parseInt(prompt("please enter your salary :"));

let male,female,bonus;

if(gen == 'male'){
    if(sal < 10000){
       bonus = sal * 0.02;     
    }else{
        bonus = 0;
    }
}else if(gen == 'female'){
    if(sal < 10000){
        bonus = sal * 0.03; 
    }else{
        bonus = 0;
    }
}

// console.log("bonus",bonus);
// console.log("gen",gen);


document.getElementById("gen").innerHTML=gen;
document.getElementById("sal").innerHTML=sal;
document.getElementById("bonus").innerHTML=bonus;