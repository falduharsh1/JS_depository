let x = Math.floor(Math.random()*10);
let y = Math.floor(Math.random()*10)

document.getElementById("cap").innerHTML=x;
document.getElementById("cap2").innerHTML=y;

function handlecapcha (){

    ans=x+y;

    let finalans = document.getElementById("ans").value;

    if(finalans == ans){
        alert("Your answer is correct");
    }else{
        alert("Your answer is incorrect");
    }
}


