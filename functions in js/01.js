function add(num1, num2) {
    console.log(num1 + num2);
}

add(4, 5)

// function add(num1, num2) {
//     let result = num1 + num2;
//     return result
// }
// let result = add(4, 5);
// console.log("result is: ",result);


function add(num1, num2) {
  return num1 + num2;
}

let result = add(4, 5);
console.log("result is: ", result);


// function loginUsernameMessage(username) {
//     return `${username} just logged in`;
// }


console.log(loginUsernameMessage());

function loginUsernameMessage(username) {
    if (username === undefined) {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`;
}

//we can also write like this, it is the same as the previous

console.log(loginUsernameMessage());

function loginUsernameMessage(username) {
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in`;
}


function loginUsernameMessage(username= "sid") {
    if (!username) {
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUsernameMessage("siddharth"));

function calculateCartPrice(num1) {
    return num1;
}

console.log(calculateCartPrice(100));

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(100, 200, 500, 400));

function calculateCartPrice(val1, val2, ...num1) {
    console.log(val1, val2);
    return num1;
}

console.log(calculateCartPrice(100, 200, 2000, 500));

// const user = {
//     username: "siddharth",
//     price: 2000
// }

function handleObject(anyobject) {
    console.log(
        `user is ${anyobject.username} and the price is ${anyobject.price}`
    ); 
}

handleObject({
    username: "johndoe",
    price: 200
});

const arr = [100, 200, 400, 600];
function returnSecondArray(getArray) {
    return getArray[0];
}

// console.log(returnSecondArray(arr));

console.log(returnSecondArray([100, 200, 400, 500])); 

// returnSecondArray(arr);

