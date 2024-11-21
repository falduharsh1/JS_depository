const validateForm = () => {
    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let num = document.contactForm.mobile.value;
    let country = document.contactForm.country.value;

   let form_submit = true;

    if(name === ''){
        form_submit = false;
        document.getElementById('nameErr').innerHTML = 'Please Enter Full Name';
    }else{
        const regexpName = /^[a-zA-Z ]{2,30}$/;
        if(regexpName.test(name)){
            document.getElementById('nameErr').innerHTML = '';
        }else{
            form_submit = false;
            document.getElementById('nameErr').innerHTML = 'Please Enter Valid Full Name';
        }  
    }

    if(email === ''){
        form_submit = false;
        document.getElementById('emailErr').innerHTML = 'Please Enter Email Address';
    }else{
        const regexpEmail = /^\S+@\S+\.\S+$/
        if(regexpEmail.test(email)){
            document.getElementById('emailErr').innerHTML = '';
        }else{
            form_submit = false;
            document.getElementById('emailErr').innerHTML = 'Please Enter Valid Email Address';
        }
    }

    if(num === ''){
        form_submit = false;
        document.getElementById('mobileErr').innerHTML = 'Please Enter Mobile Number';
    }else{
        if(isNaN(num)){
            form_submit = false;
            document.getElementById('mobileErr').innerHTML = 'Please Enter Valid Mobile Number';         
        }else{
            if(num.toString().length === 10 && num.length > 0){
                document.getElementById('mobileErr').innerHTML = '';         
            }else{
                form_submit = false;
                document.getElementById('mobileErr').innerHTML = ' Mobile Number Must Be 10 Digit';         
            }
        }
    }

    if(country === '0'){
        form_submit = false;
        document.getElementById('countryErr').innerHTML = 'Please Select Any country'
    }else{
        document.getElementById('countryErr').innerHTML = ''
    }

    let gender = document.getElementsByName('gender');

    let flag=false;
    for(let i=0; i<gender.length; i++){
        if(gender[i].checked){        
            flag=true;
        }
    }

    // console.log(flag);

    if(flag===true){
        document.getElementById('genderErr').innerHTML =''
    }else{
        form_submit = false;
        document.getElementById('genderErr').innerHTML ='Please Select Gender'
    }

    let hobby = document.getElementsByName('hobbies');

    let hobbyArray = []

    for(let i=0; i<hobby.length; i++){
        if(hobby[i].checked){
            hobbyArray.push(hobby[i].value)
        }
    }

    if(hobbyArray.length >= 2){
        document.getElementById('hobbyErr').innerHTML = '';
    }else{
        form_submit = false;
        document.getElementById('hobbyErr').innerHTML = 'Please Select Atleast 2 hobbies';
    }

    console.log(form_submit);

    return form_submit;
    
}