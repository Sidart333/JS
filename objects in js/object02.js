const credentials = new Object();

credentials.id = "ct-102";
credentials.name = 'sid';
credentials.age = 34;
credentials.email = 'sid@capsitech'

// console.log(credentials);


const user = {
    name: {
        userFullName: {
            firstname: 'siddharth',
            middlename: 'singh',
            lastname: 'panwar'
        }
    },
    age: 23,
    email: 'sid@capsitech',
    userId: 'ct-103'
}

// console.log(user);

// console.log(user.name.userFullName.middlename);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

// const combineObjs = Object.assign({}, obj1, obj2, obj3);
//the braces include is necessary if not included the output will be shown same but if see the value of obj1 then it has the same output as combinedObjs because it takes the obj1 as the container for all the objects

const combineObjs = { ...obj1, ...obj2, ...obj3 }
console.log(combineObjs);

// console.log(Object.keys(credentials));
// console.log(Object.values(credentials));
// console.log(Object.entries(credentials));
// console.log(Object.hasOwnProperty("name"));
// console.log(Object.hasOwnProperty('empId'));

const { name: username } = credentials;

console.log(username);





