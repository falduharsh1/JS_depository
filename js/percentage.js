function handleper (){
    event.preventDefault();

    let standard =document.getElementById("std").value;

    let rollnum = document.getElementById("Rollnum").value;

    let percentage = parseFloat(document.getElementById("per").value);

    console.log(standard,rollnum,percentage);

    let grade;

    if(percentage >= 91 && percentage <= 100 ){
        grade = "A";
    }else if (percentage >= 81 && percentage < 91){
        grade = "B";
    }
    else if (percentage >= 71 && percentage < 81){
        grade = "C";
    }
    else if (percentage >= 61 && percentage < 71){
        grade = "D";
    }else if (percentage >= 40 && percentage < 61){
        grade = "E";
    }else if (percentage >= 0 && percentage < 40){
        grade = "Failed";
    }



    // document.getElementById("result").innerHTML=grade;
    
    document.getElementById("stand").innerHTML=standard;
    document.getElementById("rolln").innerHTML=rollnum;
    document.getElementById("pers").innerHTML= percentage;
    console.log("s1",grade);
    document.getElementById("s1").innerHTML=grade;
}

    