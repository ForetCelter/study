
let fruits = ["apple", "orange", "pineapple", "coconut"];

fruits.push("Coconut");
fruits.pop();
fruits.unshift("mango")
fruits.shift()

let numOfFruits = fruits.length;
let index = fruits.indexOf("pineapple");

console.log(numOfFruits)
console.log(index)



for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

fruits.sort()
fruits.sort().reverse()


for (let fruit of fruits) {
    console.log(fruit)
}