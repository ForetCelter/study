
// const prices = [10000, 12000, 30000, 25000, 40000]


// const total = prices.reduce(sum)
// console.log(total)

// function sum(accummulator, element) {
//     return accummulator + element;
// }

const grades = [75, 90, 95, 80, 85, 100];

const maximum = grades.reduce(getMax);
console.log(maximum)

const minimum = grades.reduce(getMin);
console.log(minimum)

function getMax(accummulator, element) {
    return Math.max(accummulator,element);
}

function getMin(accummulator, element) {
    return Math.min(accummulator,element);
}
