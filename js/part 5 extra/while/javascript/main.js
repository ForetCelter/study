
// let username;

// while(username === "" || username === null){
//     username = window.prompt(`Enter your name`);
// }

// do {
//     username = window.prompt(`Enter your name`);
// } while(username === "" || username === null)

let loggedIn = false;
let username;
let password;

while(!loggedIn) {
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "Aca" && password === "Anjaylogin") {
        loggedIn = true;
        console.log("Anjay login")
    } else {
        console.log("Siapa ko")
    }
} 

console.log(`Hello ${username}`);
