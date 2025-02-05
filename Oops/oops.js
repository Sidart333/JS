const user = {
    username: "siddhart",
    loginCount: 5,
    signedIn: true,
    getUserDetails: function () {
        // console.log("got user details from db");
        // console.log(`${this.username}`)
        console.log(this);
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Welcome, ${this.username}`);
        
    }

    return this
}


const userOne = new User('siddharth', 4, true)
const userTwo = new User("michael", 10, false);
console.log(userOne);
console.log(userTwo);
  


