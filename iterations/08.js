const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (accumulatorValue, currentValue) {
//     console.log(`accumulator value is ${accumulatorValue} and current value is ${currentValue} `);
//     return accumulatorValue + currentValue;
// },5)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 5)

// console.log(myTotal);

const shoppingCart = [
    {
        courseName: 'js course',
        price: 2999
    },
    {
        courseName: 'python course',
        price: 999
    },
    {
        courseName: 'data science course',
        price: 12999
    },
    {
        courseName: 'dsa course',
        price: 3999
    }
]

const priceToPay = shoppingCart.reduce((acc, currval) => acc + currval.price, 0)
console.log(priceToPay);



