function sub (){
    event.preventDefault();
    let pros,rams,mem,card,laptop;

    pros = document.getElementById("p").value;
    rams = document.getElementById("r").value;
    mem = document.getElementById("m").value;
    card = document.getElementById("g").value;
    
   if(pros == '5000'){
    type = "student Pc";
   }

   if(pros === '7000' && rams === '8000'){
     type = "Professional Pc";
   }else{
    type = "student Pc";
   }

   if(pros === '9000' && rams === '12000' && card === '50000'){
    type = "Gaming Pc";
   }else{
    type = "Professional Pc";
   }

    console.log(pros); 
    console.log(rams); 
    console.log(mem); 
    console.log(card); 
}
