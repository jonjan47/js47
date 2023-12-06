/*const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);
const bigNumber = 7464726867624n


const heros = ["gujjar","dil","jan"];
let myObj = {
name: "ali",
age: 25,
}

const myFunction = function(){
//console.log("hello world");
}

console.log(typeof myFunction);*/
//

//mamory in two type stack (primitive ), heap (non-primitive)
/*let myYoutubename = "gujjar47.com"
let anothername = myYoutubename
anothername = "diljanpakistan"
console.log(myYoutubename);
console.log(anothername);*/
/*let userone = {
    Email: "gujjar47@gamail.com",
    upi: "user@llb" 
}

let usertwo = userone
usertwo.Email = "khuram34@gamil.com"
console.log(userone.Email);
console.log(usertwo.Email);*/

/*const product = {
    title: "Bollpen",
    rating: 4,
    offer:5,
    price: 2500
};

//console.log(product);

const profile = {
    name: "khuram",
    isFollow:false,
    followers:56,
    following:123,
};
console.log(profile);
let num = prompt("enter a number:")
if (num % 5 === 0) {
console.log(num,"is multiple of 5");
} else {
    console.log(num,"is not multiple of 5");
}*/
/*let score = 90;
let grade;
if(score >= 90 && score<=100) {
    grade = "A";
} else if (score>= 70 && score<= 89) {
    grade = "B";
} else if (score>= 60 && score<= 69) {
    grade = "C";
} else if (score>= 50 && score<= 59) {
    grade ="D";
} else if(score>= 0 && score<= 49) {
    grade ="F"
}

console.log("accrding to your scores, your grade was :",grade);*/
//loop -for loop ,while loop 
/*for loop for (let i = 1; i<=5; i++){
    console.log("khuram ")
}*/
/*for(let i=1; i<=5; i++) {
    console.log("i =", i);
}
console.log("loop has been ended");*/
//calculate sum of 1 
/*let sum = 0;
for(let i=1; i<=5; i++) {
    sum = sum + i;
}
console.log("sum =", sum);
console.log("loop has been ended");*/
//while loop
/*let i =1; 
while(i<=10) {
    console.log("gujjar =", i);
    i++
}*/
//do while loop
/*let i =20; 
do {
    console.log("gujjar");
    i++
}while(i<=10);*/
//for-of loop is use string and array
/*let  str = "gujjar";
let size = 0;
for(let val of str) { //itertor ->character
console.log("val=", val);
size++;
}
console.log("srting size =" , size);*/
//for in loop is used object
/*let student = {
    name:"khuram",
    age: 25,
    cgpa:4.8,
    ispass:true,
};
for (let key in student) {
    console.log("key=",key, "value=", student[key]);
}*/
/*for(let num=0; num<=100; num++){
    //if(num%2===0)//even number
    if(num%2!==0) odd number
    console.log("num =",num);
}*/
/*let gameNum = 23;
let userNum = prompt("Guess the game number :");
//console.log(userNum);
while(userNum != gameNum) {
userNum = prompt("you entered wrong number. Guess again :");
}
console.log("congratualtion,  you entered the right number");*/
//String  ,string inbilt property   strings have his variable this is string lenght
/*let str = "gujjar";
console.log(str[0]);*/
//template literals way emmbedded expression in strings
//let specialstring = `this is template literal ${1+2+3+4} `;
//console.log(specialstring);
//escap charter \n is space \t is tabe
//console.log("khuram\nshehzad");
//console.log("khuram\tshehzad");
//let str = "khuram \tshehzad";
//console.log(str.length);// space is count
//**string method these are built-in function to manipulate a string, string is not change
//:- str.toUpperCase()
/*let str = "khuram";
let newstr = str.toUpperCase()
console.log(str);
console.log(newstr);*/
//:- str.toLowerCase();
/*let str = "GUJJAR";
let newstr = str.toLowerCase();
console.log(str);
consol.log(newstr)*/
//:- str.trim() >it use remove whitespaces
/*let str = "  khuram shehzad   ";
console.log(str.trim());*/
//str.slice(start,end) >return part of string
/*let str = "hello";
console.log(str.slice(0,5));*/
//str1.concat(str2)>joine str 2 with ste1
/*let str1 = "gujjar";
let str2 = "khuram";
//let res = str1.concat(str2);
let res = str2.concat(str1);
console.log(res);*/
//str.replace(searchVal,newval)
//str.charAt(idx)
/*let str = "hello";
console.log(str.replace("hello", "gujjar"));*/
/*let str = "ilovejs"
console.log(str.charAt(3));*/
/*let fullName = prompt("enter your fullname without spaces");
let username = "@" + fullName + fullName.length;
console.log(username);*/
/*---->ARRAYS
collection of items*/
/*let student = ["ali", "khuram", "hamza", "shan","gujjar"];
let marks = [98, 56, 58, 36, 90];
console.log(student);*/
//-->array indices
/*let marks = [98, 56, 58, 36, 90];
console.log(marks);
-->**string is immutable
arrays is mutable*/
//looping over is print all element of an array for (let i=0; i<arr.lenght; i++){}
/*let student = ["ali", "khuram", "hamza", "shan","gujjar"];
for(let i=0; i<student.length; i++) {
    console.log(student[i]);
}*/
/*let cities = ["lahore", "karchi", "multan", "sialkot"];
for(let city of cities) {
    console.log(city.toUpperCase());
}*/
/*let marks = [98, 56, 58, 36, 90];
let sum = 0;
for(let val of marks) {
    sum += val; 
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);*/
//let items = [350, 456, 563, 123, 222];
/*let i = 0;
for(let val of items) {
let offer = val / 10;
items[i] = items[i] - offer;
console.log(`value after offer = ${items[i]}`);
i++;
}*/
/*for(i = 0; i< items.length; i++) {
    let offer = items[i] / 10 ;
    items[i] -= offer;
}
console.log(items);*/
//-->array methods
//->push() :add to end
/*let fooditems = ["a", "b", "c", "d"];
fooditems.push ("e");
console.log(fooditems);*/
//-->pop():delete from end & return
/*let fooditems = ["a", "b", "c", "d"];
fooditems.pop ()
console.log(fooditems);*/
//-->toString(): converts array to string
/*let fooditems = ["a", "b", "c", "d"];
console.log(fooditems.toString());*/
//-->concat():joins multiple arraya & return result
/*let fooditems = ["a", "b", "c", "d"];
let fan = [ "gujjar", "ali", "jan"];
let join = fooditems.concat(fan);
console.log(join);*/
//-->unshift():add to start
//let fan = [ "gujjar", "ali", "jan"];
//fan.unshift("khuram");
//console.log(fan);
//-->shift(): delete from start& return
//let fan = [ "gujjar", "ali", "jan"];
//fan.shift();
//console.log(fan);
//->slice():return a piece of array not change orignal array
//let fan = [ "gujjar", "ali", "jan", "dil"];
//console.log(fan.slice(1, 3));
//->splice():change orignal array(add,remove,replace)
//let arr = [ 1, 2, 3, 4, 5, 6, 7];
//add element-->arr.splice(3, 0, 123);
//delete Element-->arr.splice(3, 1);
//replace element--->arr.splice(3, 1, 121);
/*let companies = ["Blooberg", "Microsoft", "uber", "google", "ibm", "netflix"];
//companies.shift();
//companies.splice("2", "1", "OLA");
companies.push("amzon")
console.log(companies);*/
