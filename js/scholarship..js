let fees = parseInt(prompt("please enter your fees :"));
let cgpa = parseFloat(prompt("please enter your cgpa :"));
let cast = prompt("please enter your cast :");

let grade ,sch=0;

if(cgpa >= 9 && cgpa <=10){
    grade='A';
}else if(cgpa > 8.5 && cgpa < 9){
    grade='B';
}else if(cgpa > 8 && cgpa < 8.5){
    grade='C';
}else if(cgpa > 7.5 && cgpa < 8){
    grade='D';
}

if(grade == 'A' || grade == 'B'){
    if(cast == 'o'){
        sch = 0;
    }else if(cast == 'b'){
        sch = 0.25;
    }else if(cast == 's'){
        sch = 0.50;
    }else if(cast == 't'){
        sch =  1;
    }
}

console.log(fees*sch);

document.getElementById("sch").innerHTML="your scholarship is :" + fees*sch;