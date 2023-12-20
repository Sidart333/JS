// Primitive --> call by value it means the data which is stored originally is not given but the copy of it is given

// 7 types: String, Number, Boolean, Null, undefined, Symbol(to make the variable unique), BigInt

// javascript is dynamically typed language i.e. we can change the values of variable during runtime

const score = 100;
const scoreValue = 100.4;
const isLoggedin = false;
const outsideTemp = null;
let userEmail; //we can also manually define the value of variable undefined like let userEmail = undefined;

//the symbol takes the another symbol datatype differently
const id = Symbol('124');
const anotherId = Symbol('312');

console.log(id === anotherId);



// Reference type(Non-primitive)

// array, objects, Functions

