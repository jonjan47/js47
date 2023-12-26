/*const student = {
    fullName : "khuram",
    marks : 90,
    printMarks: function () {
        console.log("marks =", this.marks);
    }
}*/
//-->Prototypes in Js<---//
//A Javascript object is an entity having state and behavior (properties and method).
//JS object have a special property called prototype.we can set prototype using _ _proto_ _

/*const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};
const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%"); //if object & prototype have same method object method will be used.
    },
};
karanArjun.__proto__ = employee;*/

//--->Classes in JS<---//
// Class is a program-code template for creating objects.
// Those object will have some state (variables)& some behaviour(functions) inside it.
/*class myClass {
    constructor(){}
    myMethod(){}
}
let myObj = new myClass();*/
/*class toyota {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}
let fortuner = new  toyota();
fortuner.setBrand("audi")
let honda = new  toyota();*/
//-->constructor<--//
//constructor() method is automatically invoked by new ,initializes object
/*class toyota {
    constructor(brand, milage){
        console.log("creating new object");
            this.brand = brand;
            this.milage = milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

}
let fortuner = new  toyota("fortuner",21);//constructor
console.log(fortuner);
let lexus = new  toyota();//constructor*/
//-->Inheritance in JS<--//
//inheritance is passing down properties & method form parent class to child class.
/*class parent{

}
class child extends parent {

}*/
/*class Parent {
    hello () {
console.log("hello");
    }
}
class child extends Parent {}
let obj = new child();*/
/*class Parson{
    constructor() {
this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
sleep(){
    console.log("sleep");
}
work(){
    console.log("do nothing");
}
}
class Engineer extends Parson {
    work(){
        console.log("solve problem, bulid sometihing");
    }
}
class doctor extends Parson {
    work(){
        console.log("solve problem, bulid sometihing");
    }
}
let aliobj = new Engineer();*/
//--->Super keyword<---//
/*the super keyword is used to call the constructor of its parent class to access the
parents properties and method.
super(args)   //calls parents constructor
super.parentMethod(args)*/
/*class Parson{
    constructor(name) {
this.species = "homo sapiens";
this.name = name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Parson {
    constructor(name){
        super(name);// to invoke parent class constructor   
     }
    work(){
        console.log("solve problem, bulid sometihing");
    }
}
let engobj = new Engineer("ali");*/
//Q->you are creating a website for a college.creat a class user with 2 proparties,name&email.
//It also has a method called ViewData()the allows user to view website data.
/*let Data = "secret information";
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data=",Data);
    }
}
    class Admin extends user {
        constructor(name, email){
            super(name, email);
        }
        editData() {
            Data = "some new value";
        }
    }
let student1 = new user("ali", "ali@email.com");
let student2 = new user("khuram", "khuram@email.com");
let techer1 = new user("Dean", "dean@email.com");
let admin1 =new Admin("admin", "admin@email.com");*/


//-->Error Handling<--//
// try-catch

/*try{
    normal code
} catch(err){
    console.log(err)
};*/
let a = 12;
let b =13;
console.log("a =", a);
console.log("b =", b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c);

}catch(err){
    console.log(err);
}
console.log("a+b=",a+b);