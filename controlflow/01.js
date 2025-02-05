// if

const temperature = 41;
if (temperature == 40) {
    console.log("temperature is 40");
}
else {
    console.log("temperature is higher");
    
}

//>, <, >=, <=, !=, ===, !==, ==

// const score = 100
// if (score > 50) {
//     const power = "fly"
//     console.log(`user power is : ${power}`);
// }

// const balance = 700

// if (balance > 500) console.log("Yes it is."); //implicit scope
// //never do this 
// if (balance > 500) console.log("Yes it is."), console.log("hey there") //immature practice 

const userLoggedIn = true
const debitCard = true 

if (userLoggedIn && debitCard) {
    console.log(`you are allowed to shop`);
    
}

const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("user logged in successfully  ");
    
}