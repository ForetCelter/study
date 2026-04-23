let age = 21;
let message = age >= 18 ? "You're and adult" : "You're a minor"; 
console.log(message)

let time = 16;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon"

console.log(greeting)

let isStudent = false;
let messageStudent = isStudent ? "You're a student" : "You're not a student";
console.log(messageStudent)

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - (purchaseAmount * discount / 100) }`)