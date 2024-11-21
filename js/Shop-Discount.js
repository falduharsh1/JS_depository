 let shop_dis = [];

 let update = null;

 const handleedit = (i) => {
    console.log(i,shop_dis,shop_dis[i]);

    document.getElementById('shoping').value = shop_dis[i].products;
    document.getElementById('discount').value = shop_dis[i].discount;

    // console.log(Edit1,Edit2);
    
    update = i;
 }

 const display = () => {
    let print = `

     <table border="1">
        <tr>
            <th>Items</th>
            <th>Discount</th>
            <th>Action</th>
        </tr>
    `;

    shop_dis.map((v,i) => {
        print+= `
        <tr>
            <td>${v.products}</td>
            <td>${v.discount}</td>
            <td><button onclick ="handleedit(${i})">Edit</button><button onclick ="handledelete(${i})">Delete</button></td>
        </tr>
        `
    })

    print+= '</table>'

    document.getElementById('disp').innerHTML = print;
 }

 const handledelete = (i) => {

    shop_dis.splice(i,1)
    console.log(shop_dis);
    
    display ();
 }

const handlesubmit = () => {
    event.preventDefault();

    let data_1 = document.getElementById('shoping').value;
    let data_2 = document.getElementById('discount').value;
    
    let Object = {
        products : data_1,
        discount : data_2
    }

    if(update === 0 || update != null){
        console.log("add...",update);
        shop_dis[update]=Object;
    }else{
        shop_dis.push(Object)
        console.log(shop_dis);
    }
    
    update=null;

    document.getElementById('shoping').value = '';
    document.getElementById('discount').value = '';

    display ();   
}

const handleselect = (v,i) => {
    display ();
}