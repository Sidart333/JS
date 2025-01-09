const myArr = [0, 1, 2, 3, 4, 5, "sid", true];
console.log(myArr);

// 

// array methods

// myArr.push(6);
// myArr.push(610);
// myArr.pop()

myArr.unshift(12) //unshift method inserts a value at the top the array
myArr.shift(2) //shift removes the array elements and it does not accept parameteres

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(0));

const newArr = myArr.join() //join adds all array elements into a string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// console.log(myArr);

//slice , splice

console.log("A ",myArr);
//slice method

const myNewArray = myArr.slice(1,3);
console.log(myNewArray);
console.log("A ",myArr);

//splice method it removes the element from the original array

const myNewArray2 = myArr.splice(1,3)
console.log(myNewArray2);
console.log("B ",myArr);



// console.log(Array.isArray (myNewArray));
