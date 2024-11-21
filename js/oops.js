//class is a blueprint to create an object
class building {
    constructor (w,l) {        //it is used to initialize class.and its called when object created
        this.width = w;
        this.lenght = l;
    }

    area () {               //method or behaviour
        let ans = this.width * this.lenght;
        console.log("area of building is:",ans);
    }
}

//object is an entity that has properties and methods (behaviour)

const b1 = new building (10,20);
b1.area();

const b2 = new building (50,10);
b2.area();

//----------------------------------------------------------------------------------//

class student {
    constructor(r_n,n,per){
        this.roll_num = r_n;
        this.name = n;
        this.percentage = per;
        this.grade = ''
    }

    FindGrade(){
       if(this.percentage >= 80 && this.percentage<=100){
        this.grade = 'A'
       }else if(this.percentage >= 60 && this.percentage<80 ){
        this.grade = 'B'
       }else if(this.percentage >= 0 && this.percentage<60){
        this.grade = 'C'
       }
    }

    display(){
        console.log("roll num", this.roll_num);
        console.log("name is ",this.name);
        console.log("per is",this.percentage );
        
    }
}
 const s1=  new student (101,'harsh',88);
 s1.display();
 s1.FindGrade(); 

//----------------------------------------------------------------------------------//

class Employess{
    constructor(i,n){
        this.id = i;
        this.name = n;
    }
}

//inheritance : child class accesss all properties and methods of parent class

class salary extends Employess {
    constructor(i,n,s){
        super(i,n);

        this.salary = s;
    }

    display(){
        console.log("Id is:",this.id);
        console.log("Name is:", this.name);
        console.log("salary is:",this.salary);
    }
}

const s2 = new salary(101,'harsh',100000);
s2.display();

//----------------------------------------------------------------------------------//

class Course {
    constructor(n,d){
        this.name = n;
        this.duration = d;
    }

        displayBasic () {
        console.log("Course Name is:", this.name);
        console.log("Course duration is:",this.duration);
        }
    }

class Fees extends Course {
    constructor(n,d,t_f,dis){
        super(n,d);

        this.tution_fees = t_f;
        this.discount = dis
    }

    DisplayFees(){
        console.log("Course fees is:",this.tution_fees );
    }

    cal_discount(){
        if(this.tution_fees >=0 && this.tution_fees <=30000 ){
            this.discount = this.tution_fees * 0.05;
        }else if(this.tution_fees >30000 && this.tution_fees <=60000 ){
            this.discount = this.tution_fees * 0.07;
        }else if(this.tution_fees >60000 && this.tution_fees <=100000 ){
            this.discount = this.tution_fees * 0.10 ;
        }else if( this.tution_fees >100000 ){
            this.discount = 0;
        }
        console.log("Discounted amount is:", this.discount);
       console.log("After discount your final fees is:",this.tution_fees-this.discount);
    }
}

const s3 = new Fees("BCA",12,75000)
s3.displayBasic();
s3.DisplayFees();
s3.cal_discount();





