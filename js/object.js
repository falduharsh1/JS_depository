// const person = {
//     name: "amit",
//     Age : "20"
// }

// console.log(person.name,person.Age);
// console.log(person["name"],person["Age"]);


// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v,i)=>{
//     if(i===0){
//         console.log(v.name,v.age); 
//     }
// })

// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ]  

// person.map((v,i) => {
//     console.log(v.name,v.age);

//     v.course.map((v1,i1) => {
//         console.log(v1);
//     })
// })

// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:[
//             "c",
//             "html"
//         ]
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:[
//              "c",
//              "html"
//         ]
//     }
// ];

// person.map((v,i)=> {
//     console.log(v.name,v.age);
    
//     v.course.map((v1,i1)=>{
//         console.log(v1);
        
//     })
// })

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

    // console.log(myObj.name,myObj.age,myObj.cars.car1,myObj.cars.car2,myObj.cars.car3);

    // for(let k in myObj){
    //     if(k === 'cars'){
    //         for(let k1 in myObj[k]){
    //             console.log(myObj[k][k1]);             
    //         }
    //     }else{
    //         console.log(myObj[k]);  
    //     }
    // }
    

    // const person = {
    //     name: "amit",
    //     Age : "20"
    // }

    // for(let k in person){
    //     console.log(k,person[k]);
    // }

    // const person =[
    //     {
    //         name:"amit",
    //         age:19,
    //         course:{
    //             c1: "c",
    //             c2: "html"
    //         }
    //     },
    //     {
    //         name:"mayur",
    //         age:20,
    //         course:{
    //             c1: "c",
    //             c2: "html"
    //         }
    //     }
    // ];

    // person.map((v,i) => {
    //     for(let k in person){
    // }
    // }
           
    // })

    // let data = {
    //     personal_info: {
    //         name: 'amit',
    //         age: 25,
    //         city: 'surat'
    //     },
    //     courses: ["C", "JavaScript", "React"],
    //     branches: {
    //         b1: {
    //             admission: 50,
    //             vacant_seat: 10
    //         },
    //         b2: {
    //             admission: 30,
    //             vacant_seat: 20
    //         },
    //         b3: {
    //             admission: 25,
    //             vacant_seat: 25
    //         },
    //         b4: {
    //             admission: 40,
    //             vacant_seat : 10
    //         }
    //     }
    // }

    // for (let k in data){
    //     if (k === 'personal_info') {
    //         for (let k1 in data[k]) {
    //             console.log(data[k][k1]);
    //         }
    //     }else if(k === 'courses'){
    //        data[k].map((v,i)=> {
    //             console.log(v);
    //        })
    //     }else if(k === 'branches'){
    //         for(let b in data[k]){
    //             console.log("branche is",b);
    //             console.log("admission is :",data[k][b].admission);
    //             console.log("admission is :",data[k][b].vacant_seat);  
    //         }
    //     }
    //     }
    
    // const person = {
    //         name: "amit",
    //         Age : "20"
    // }

    // Object.keys
    // let ans = Object.keys(person)
    // console.log(ans);                return array of keys

    // Object.values
    // let ans = Object.values(person)
    // console.log(ans);                  return array of values
    
    // Object.entries
    // let ans = Object.entries(person)
    // console.log(ans);                   return array of properties array
    
    // Object.fromEntries
    // let ans = Object.fromEntries(Object.entries(person))
    // console.log(ans);                  convert array to object

    // Object.freeze
    //  Object.freeze(person)

    // update
    // person.Age = 46;
    // console.log(person);

    // // add
    // person.city = 'surat'
    // console.log(person);

    // // delete
    // delete person.Age;
    // console.log(person);

    let institues = [
        {
            name: 'ABC IT Institute',
            seat: [
                {
                    react: 15,
                    node: 20,
                    full_stack: 10,
                    ui_ux: 0
                },
            ]
        },
        {
            name: 'XYZ IT Institute',
            seat: [
                {
                    react: 0,
                    node: 70,
                    full_stack: 0,
                    ui_ux: 10
                },
            ]
        },
        {
            name: 'PQR IT Institute',
            seat: [
                {
                    react: 7,
                    node: 0,
                    full_stack: 0,
                    ui_ux: 0
                },
            ]
        },
        {
            name: 'MNP IT Institute',
            seat: [
                {
                    react: 0,
                    node: 0,
                    full_stack: 0,
                    ui_ux: 0
                },
            ]
        }
    ]

    let data = institues.map((v)=> {
        return {
            name: v.name,
            seat: [Object.fromEntries(Object.entries(v.seat[0]).filter(([k,v]) => v > 0))]      
        }
    })

    .filter((v)=> Object.keys(v.seat[0]).length > 0)

    console.log(data);
    

    
    
    
    
    
