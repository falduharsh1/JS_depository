// class Employee {
//     name;
//     id;
//     #salary;
//     #insentive
//     constructor(n, i, s) {
//         this.name = n;
//         this.id = i;
//         this.#salary = s; 
//     }
//     set insentive(i){
//         this.#insentive = i;
//     }

//     get insentive() {
//         return this.#insentive;
//     }

//     displayInfo() {
//         console.log("Employee Name is:", this.name);
//         console.log("Employee ID is:", this.id);
//         console.log("Employee Salary is:", this.#salary);
//     }
// }

// let s1 = new Employee ('harsh','007',1000000);
// s1.displayInfo();
// // s1.#salary = 20;                     //error
// s1.insentive = 200; 
// console.log("your insentive is:",s1.insentive);

//----------------------------------------------------------------------------------//

class Restaurant {
    name;
    dishes;
    #price;
    #discount;

    constructor(n,d,p){
        this.name = n;
        this.dishes = d
        this.#price = p
    }

    set discount(d){
        this.#discount = d;
    }

    get discount () {
        return this.discount;
    }

    display_Resto(){
        console.log("Restaurant is:", this.name);
        console.log("dishe Name is:",this.dishes);
        console.log("dishe Price is:",this.#price);

        let DisAmt=0;
        
        if(this.#price >= 5000){
            DisAmt = (this.#price * this.#discount )/100
        }

        console.log("your discont is:",DisAmt);   
    }
}

let r1 = new Restaurant ('Amiras','Special Gujrati Thali',6999)
r1.discount = 10;
r1.display_Resto()

//----------------------------------------------------------------------------------//

class Car {
    constructor(b, m) {
        this.brand = b;
        this.model = m;
    }

    displayInfo() {
        console.log("Brand is:",this.brand);
        console.log("Model is:",this.model);
        
    }

    _calculatePrice() {
        return 30000;
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.displayInfo(); 
myCar._calculatePrice()



