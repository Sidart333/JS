const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, network calls, cryptograpghy
    setTimeout(function () {
        // console.log("async task is performed");
        resolve();
    }, 1000)
})

// .then and resolve are connected to each other so to consume an promise you have to call resolve (resolve is a method and we have to call )

promiseOne.then(function () {
    // console.log("promise is consumed");
})

    new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('a promise has been created');
        resolve();
    }, 1000)
}).then(function () {
    // console.log('promise consumed');
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("aync third performed");
        resolve({ username: "siddharth", email_id: "siddharthsinghpanwar01@gmail.com" });
    }, 2000)
}).then(function (user) {
    // console.log(user);
})


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({username: "siddharth", password: "4321"})
//         } else {
//             reject('ERROR! Something went wrong')
//         }
//     }, 1000);
// }).then(function (user) {
//     // console.log(user);
// })
//     .catch(function (error) {
//     // console.log(error);
// })


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: 'siddharth', password: '4321'})
        } else {
            reject('ERROR! Something went wrong')
        }
    }, 1000);
})

promiseFour
    .then((user) => {
    // console.log(user);
    return user.username    
    })
    .then((username) => {
    // console.log(username);
    })
    .catch((err) => {
    // console.log(err);
    })

const promiseFive = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            if (!error) {
                resolve({username: "sid", email_id:'sid@mail.com'})
            } else {
                reject('ERROR! Something went wrong')
            }
        }, 1000);
})
    
async function consumePromiseFive(username) {
    try {
        const response = await promiseFive
        // console.log(response);
        
    } catch (err) {
        // console.log(err);
    }
}

// consumePromiseFive();

// async function getAllUsers() {
// try {
//         const response = await fetch("https://api.github.com/users/Sidart333");
//         const data = await response.json(); // to convert a string into json takes time that's why we have to use await here also
//         console.log(data);
// } catch (error) {
//     console.log("E, ",error);
    
// }
// }

// getAllUsers();

const response = fetch("https://api.github.com/users/sidart333 ")
    .then((response) => {
    return response.json()
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
    console.log(err);
    
})