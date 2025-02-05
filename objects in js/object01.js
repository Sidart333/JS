const Sym = Symbol("key1");
console.log(Sym);



const credentials = {
    name: 'sid',
    [Sym]: "key1",
    email: 'sid@gmail.com',
    age: 34,
    isLoggedIn: true,
    lastLoggedinDays: ['monday', 'tuesday']
};

console.log(typeof credentials[Sym]);

credentials.name = "siddharth";
console.log(credentials);
// Object.freeze(credentials);
credentials.name = "sid";
console.log(credentials);

credentials.greeting = function () {
    console.log("Hello JS user");
}
credentials.greeting2 = function () {
  console.log(`hello Js user ${this.name}`);
};

console.log(credentials.greeting());

console.log(credentials.greeting2());





// console.log(credentials.email);
// console.log(credentials['name']);

