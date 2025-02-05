// ["", "", ""]
// [{}, {}, {}]



let arr = [1, 2, 3, 4, 5]


for (const element of arr) {
    // console.log(element);
}

// let greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`the characters are ${greet}`);
// }


let greetings = "hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`the characters are ${greet}`);
}

const map = new Map()
map.set('IN', "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");
map.set("UAE", "United Arabs of Emirates");

// console.log(map); not iterable on map

for (const [key, value] of map) {
    // console.log(key, '->' ,value);
    
}
//DOES NOT ITERATES OVER OBJECT
const obj = {
    game1: 'NFS',
    game2: 'spiderman',
    game3: 'GTA'
}

for (const [key, value] of obj) {
    // console.log(key, '->' ,value);
    
}

