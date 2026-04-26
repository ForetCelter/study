
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Porsche", "911 GT3 RS", 2024, "pink");
const car3 = new Car("Mazda", "MX-5 Miata", 1990, "red");

car2.drive()
