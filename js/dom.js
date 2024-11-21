const handledelete = (id) => {
    console.log(id);
    const Btndel = document.getElementById("city-"+ id)
    Btndel.remove()
}

const handlesubmit = () => {
    event.preventDefault();
    const disp = document.getElementById('disp')
    const city = document.getElementById('city').value;

    const r_nu = Math.floor(Math.random() * 1000);

    const divelem = document.createElement("div");
    divelem.setAttribute("id","city-"+ r_nu);
    disp.appendChild(divelem);

    const spanEle = document.createElement("span")
    spanEle.textContent = city
    divelem.appendChild(spanEle);

    const BtnEle = document.createElement("button")
    BtnEle.textContent = 'x'
    divelem.appendChild(BtnEle);

    BtnEle.setAttribute("onclick",`handledelete(${r_nu})`)    
    
}

const city = document.getElementById('FormCity')
city.addEventListener('submit',function(){
    handlesubmit();
    
})

