// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.map((num) => num + 10)
// console.log(newNums);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// nums.forEach((num) => {
//     num += 10
//     console.log(`the value is ${num}`);
// })
//chaining
 
const newNums = nums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 40)
                
                
console.log(newNums);
 

                


