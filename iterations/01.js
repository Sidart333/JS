// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

for (let i = 1; i <= 5; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// let myArray = ['superman', 'batman', 'wonderwoman'];
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     if (i == 5) {
//         console.log(`5 detected`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`5 detected`);
        continue;
    }
    console.log(`value of i is ${i}`);
}