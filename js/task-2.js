function handlesubmit (){
    event.preventDefault();
    
    let food = document.getElementsByName("Food");
    let fries = document.getElementsByName("fries");
    let drinks = document.getElementsByName("drink");
    let friQuo = document.getElementById("fri_quon").value;
    let drQuo = document.getElementById("drin_quon").value;
    let dr = document.getElementById("drinkk").value;
    let cupun = document.getElementById("cuppun").value;

    let foodValue = '' , frieValue = '' , drinkvalue = '' , Discount;
    let foodPrice = 0, friesTotalPrice = 0, drinkTotalPrice = 0, totalBill = 0 ;

    for(i=0; i < food.length; i++){
        if(food[i].checked){
            foodValue=food[i].value;
        }
    }
    console.log(foodValue);

    for(i=0; i < fries.length; i++){
        if(fries[i].checked){
            frieValue=fries[i].value;
        }
    }
    console.log(frieValue);

    for(i=0; i < drinks.length; i++){
        if(drinks[i].checked){
            drinkvalue=drinks[i].value;
        }
    }
    console.log(drinkvalue);

    if(foodValue != ''){
       if(foodValue === 'burger'){
        document.getElementById("f").innerHTML = "Burger " +  " = 99";
        foodPrice = 99;
       }else if (foodValue === 'pizza'){
        document.getElementById("f").innerHTML = "Pizza " + " = 149";   
        foodPrice = 149;
       }else if (foodValue === 'sandwich'){
        document.getElementById("f").innerHTML = "Sandwich " + " = 189";
        foodPrice = 189;
       }else if(foodValue === 'combo'){
        document.getElementById("f").innerHTML = "Combo " + " = 459";
        foodPrice = 459;
       }
    }

    if(frieValue != '' && friQuo > 0 && frieValue == 'yes'){
        const friesPricePerUnit = 99; 
        friesTotalPrice = friesPricePerUnit * friQuo;
        document.getElementById("fr").innerHTML = "Fries : " + friQuo + " x " + friesPricePerUnit + " = " + friesTotalPrice;
    }else{
        document.getElementById("fr").innerHTML = '';
    }

    if(drinkvalue != '' && drQuo > 0 && drinkvalue == 'yes'){
        const mazzaPricePerUnit = 20 , pepsiPricePerUnit = 30 , spritePricePerUnit = 40;

        let mazzaTotalPrice = mazzaPricePerUnit * drQuo ;
        let pepsiTotalPrice = pepsiPricePerUnit * drQuo ;
        let spriteTotalPrice = spritePricePerUnit * drQuo ;

        if(dr === 'ma'){
            drinkTotalPrice = mazzaPricePerUnit * drQuo;
            document.getElementById("cd").innerHTML = "Mazza :" + drQuo + " x " + mazzaPricePerUnit + " =" + mazzaTotalPrice;
        }else if(dr === 'pe'){
            drinkTotalPrice = pepsiPricePerUnit * drQuo;
            document.getElementById("cd").innerHTML = "Pepsi :" + drQuo + " x " + pepsiPricePerUnit + " =" + pepsiTotalPrice;
        }else if(dr === 'sp'){
            drinkTotalPrice = spritePricePerUnit * drQuo;
             document.getElementById("cd").innerHTML = "Sprite :" + drQuo + " x " + spritePricePerUnit + " =" + spriteTotalPrice;
        }
    }else{
        document.getElementById("cd").innerHTML = '';
    }

    totalBill = foodPrice + friesTotalPrice + drinkTotalPrice;

    if(cupun == 'Harsh@123'){
        Discount = totalBill *0.10;
        totalBill = totalBill - Discount;
        document.getElementById("dis").innerHTML = "Discount is = " + Discount;
    }else if (cupun == '') {
        document.getElementById("dis").innerHTML = '';
    }else{
        document.getElementById("dis").innerHTML = "Invalid Coupan Code"; 
    }

    
    document.getElementById("total").innerHTML = "Total Bill = " + totalBill;

}