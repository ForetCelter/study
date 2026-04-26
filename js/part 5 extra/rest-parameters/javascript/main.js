
// function openFridge(...foods) {
//     console.log(foods)
//     console.log(...foods)
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "coto"
// const food2 = "naskun"
// const food3 = "konro"
// const food4 = "sop sodara"
// const food5 = "pallumara"

// openFridge(food1, food2, food3, food4, food5)

// const foods = getFood(food1, food2, food3, food4, food5)
// console.log(foods)


// function sum(...numbers) {
    
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result
// }

// function getAverage(...numbers) {
    
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(75,10,100,90,20,80)
// console.log(total)

function combineStrings(...strings){
    return strings.join(" ")
}

const fullName = combineStrings("Mr." , "Spongebob", "Squarepants", "III")

console.log(fullName)