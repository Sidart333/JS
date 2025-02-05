const user = {
    username: "siddharth",
    price: 1000,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website.`);
        console.log(this); //this returns the whole context of the object context meaning the contents inside the object 
    }
}

// user.welcomeMessage()
// user.username = "john"
// user.price = 2000
// user.welcomeMessage()

// console.log(this); //this refers to empty object

// const extra = function () {
//     let username = "sid"
//     console.log(this.username);
// }

// extra()

// function extra() {
//     const user = {
//         username: "siddharth"
//     }
//     console.log(this.username); //it will result in undefined because 'this' does not works in an function
// }

// extra()

// const add = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// // console.log(add(4,5));
// const add = (num1, num2) => num1 + num2 //implicit return

// const add = (num1, num2) => (num1 + num2) //implicit return

// console.log(add(4, 5));

const objReturn = () => ({ username: "siddharth" });

console.log(objReturn());
