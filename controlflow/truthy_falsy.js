const userEmail = 'sid@gmail.com'

if (userEmail) {
    console.log("user email exists");
} else {
    console.log("user email does not exist"); 
}

//to check whether an array is empty or not

const arr = []
if (arr.length === 0) {
    console.log("array is empty");
}

const obj = {}
if (Object.keys(obj).length === 0) {
    console.log('object is empty');
}

//Nullish coalsecing operator (??) : null defined

// let val1;
// val1 = 5 ?? 10
// console.log(val1);

// let val1;
// val1 = null ?? 10
// console.log(val1);

//ternary operator

const score = 100
score > 90 ? console.log("we won the match") : console.log("we loss the match");


