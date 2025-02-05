// normal function
function dbconnect() {
    console.log(`Db connected successfully`);
}
dbconnect();

// named IIFE function

(function dbconnect2() {
    console.log(`Database connected successfully`);
})();

//doing IIFE with arrow function  

(() => {
    console.log(`DB connectes using arrow function`);
})();

// we can also give parameters like this
    ((name) => {
    console.log(`DB connectes using arrow function with ${name}`);
} )('siddharth')