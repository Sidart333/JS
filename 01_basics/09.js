// Serialization an Object to JSON

const user = {
    name: "Siddharth",
    age: 24,
    city: "Jodhpur"
};

const serializedUser = JSON.stringify(user);
console.log(serializedUser);

// Deserializing the JSON to an Object

const jsonString = {"name": "vishnu","age": 22,"city" : "Jaipur"}

const userObject = JSON.parse(jsonString);
debugger;
console.log(userObject.name);
