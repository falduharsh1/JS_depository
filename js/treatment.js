let seating = 0 , costing = 0 , treatments = '' ;

function treatChang (){
    event.preventDefault();

     treatments;

   treatments = document.getElementById("doctor").value;
   
   
    
   if(treatments === 'Teeth Cleanings'){
    seating = 1;
    costing = 500;
   }else if (treatments === 'Fillings'){
    seating = 2;
    costing = 1500;
   }else if (treatments === 'Root Canal Treatment'){
    seating = 4;
    costing = 2500;
   }else if (treatments === 'RCT + Cover'){
    seating = 6;
    costing = 12000;
   }else if (treatments === 'Braces/Invisalign'){
    seating = 12;
    costing = 35000;
   }

   document.getElementById("t1").innerHTML = treatments;
   document.getElementById("t2").innerHTML = seating;
   document.getElementById("t3").innerHTML = costing;

   if(treatments === '0'){
    document.getElementById("one").style.display = 'none';
   }else{
    document.getElementById("one").style.display = 'inline-block';
   }
}

function handlesubmit (){
    event.preventDefault();

    let apt_date = document.getElementById('apt_date').value
    console.log(apt_date);

    let d = new Date (apt_date);

    console.log(seating);
    
    console.log(d);

    let print = `  <table border="1">
    
        <tr>
           <td>Treatment</td>
           <td>Apt date</td>
           <td>Costing</td>
        </tr>

    `;

    for(let i=0; i<seating; i++){
        print+= 
        `<tr>
            <td>${treatments}</td>
            <td>${d.toLocaleDateString()}</td>
            <td>${costing/seating}</td>
        </tr>`;

        d.setDate((d.getDate() + 7));

    }
    
    print += '</table>';

    console.log(print);
    
    document.getElementById('disp').innerHTML = print;


}
