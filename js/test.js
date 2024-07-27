const celsius = 23;
console.log("Температура в Цельсіях: " + celsius + "°С");
const fahrenheit = (celsius / 4) * 9;
console.log("Температура в Фаренгейтах: " + fahrenheit + "°F");

const numberOfDays = 30;
console.log("Днів у місяці: " + numberOfDays);
const numberOfHours = numberOfDays * 24;
console.log("Годин в місяці: " + numberOfHours);
const numberOfMinutes = numberOfHours * 60;
console.log("Хвилин в місяці: " + numberOfMinutes);

let playerHealth = 5200;
console.log("Здоров'я гравця: " + playerHealth);
let playerEnergy = 2000;
console.log("Енергія гравця: " + playerEnergy);
playerHealth -= 1850;
console.log("Здоров'я гравця: " + playerHealth);
playerEnergy -= 1488;
console.log("Енергія гравця: " + playerEnergy);

let sumOfPurchases = 8500;
console.log("Сума покупки: " + sumOfPurchases);
const discount = 10;
sumOfPurchases *= (100 - discount) / 100;
console.log("Сума покупки зі знижкою: " + sumOfPurchases);

const floatNumber = "5.8";
console.log(Math.floor(floatNumber));

const floatVariable = "5.4";
console.log(parseFloat(floatNumber));

const intVariable = "7";
console.log(parseInt(intVariable));

const sqrtVariable = 256;
console.log(Math.sqrt(sqrtVariable));

const stringNumber = "52";
console.log(parseInt(stringNumber));
const wholeNumber = 52;
console.log(toString(wholeNumber));