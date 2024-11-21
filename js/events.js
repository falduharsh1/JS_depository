// function handleclick (){
//     console.log("mouse event !");
// }

// function  handlekey (){
//     console.log("key event !");
// }

// function handlefocus (){
//     console.log("focus");
//     document.getElementById("age").style .backgroundColor ='yellow';
// }

// function handleblur (){
//     console.log("blur");
//     document.getElementById("age").style .backgroundColor ='white';
// }

// function handlesub (){
//     console.log("submit");
  
// }

// function load (){
//    console.log("load event");
// }

// window.onload =load;

// function unload (){
//     console.log("load event");
//  }
 
//  window.onunload =load;

// // function onresize (){
// //     console.log("onresize event");   
// // }


// function resize (){
//     console.log("resize event");
//  }
 
//  window.onresize =resize;

function handlechang (){
    console.log("color");
    let country
    country = document.getElementById("country").value

    if(country === '0'){
        document.getElementById("body").style .backgroundColor ='blue';
    }else if(country === 'in'){
        document.getElementById("body").style .backgroundColor ='red';
    }else if(country === 'ca'){
        document.getElementById("body").style .backgroundColor ='yellow';
    }
    
}