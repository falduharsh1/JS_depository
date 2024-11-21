// Abstraction : Abstraction is a mechanism that allows you to represent the essential features of an object while hiding the unnecessary details   


class Shape{
    getArea(){
        throw new Error("you can not access the abstract method");
    }
}

class rectangle extends Shape {
    getArea(l,w){
        console.log("Area of rectangle is:",l*w);
    }
}

class Circle extends Shape {
    getArea(r){
        console.log("Area of circle is:",3.14*r*r);        
    }
}

const r = new rectangle ();
r.getArea(10,20);

const c = new Circle ();
c.getArea(12);

const s = new Shape ();
s.getArea();