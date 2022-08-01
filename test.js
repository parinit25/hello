
// Call //
var obj = {
 num1 : 5 
};
function y(num2){
  return this.num1 + num2;
} 
console.log(y.call(obj,8));

// Apply // 

var obj2 = {
  num3 : 8
};
function z(a,b,c){
  return this.num3+a+b+c ;
}
var arr = [4,8,10];
console.log(z.apply(obj2,arr));

// BIND // 
 var student = {
  age : 20 
 };
 function printAge(){
  console.log("age of the student is =>"+this.age);
 }
 var bound = printAge.bind(student);
bound();

// Currying //

let multiply = function (x,y){
  console.log(x*y);
}
let multiplyByTwo = multiply.bind(this , 2);
multiplyByTwo(80);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(70);

// Closures //

let multiply1 = function (p){
  return function (q) {
    console.log(p*q);
  }
}
let multiplyByTwo1 = multiply1(8);
multiplyByTwo1(2);
 

































