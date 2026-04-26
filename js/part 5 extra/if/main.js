// let age = 13;

// if (age >= 18) {
//     console.log(`You are old enough to enter this site`)
// } else {
//     console.log("You must be 18+ to enter this site")
// }

// let time = 14;

// if (time < 12) {
//     console.log("Goood morning")
// } else {
//     console.log("Good afternoon")
// }

// let isStudent =  true;

// if(isStudent) {
//     console.log("You are a student")
// } else {
//     console.log("You are not a student")
// }

// let age = 0;
// let hasLicense = false;

// if(age >= 17) {
//     console.log("You are old enough to drive")

//     if(hasLicense) {
//         console.log("You have your license")
//     } else {
//         console.log("You do not have your license yet")
//     }
// } else {
//     console.log("You must be 17+ to have a license")
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = "Tua, mau mati";
  } else if (age === 0) {
    resultElement.textContent = `You baby`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
  } else if (age < 0) {
    resultElement.textContent = `Your age can't be below 0`;
  } else {
    resultElement.textContent = `You are not old enough`;
  }
};
