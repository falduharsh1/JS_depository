// polymorphism : polymorphism means "many forms" . same name function implemented in different classes with different functionality

class Animals{
    getvoice(){
        console.log("animal voice..");
    }
}

class Cat extends Animals {
    getvoice(){
        console.log("Cat voice..");
    }
} 
class dog extends Animals{
    getvoice(){
        console.log("dog voice..");
    }
}

const c = new Cat ()
c.getvoice();

const d = new dog()
d.getvoice()

