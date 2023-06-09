// Типи даних, числа та порожні типи


// Number: age

let age = prompt("Введите ваш возраст");
let born = 2023 - Number(age);
alert(born);

// Number: temperature

let C = +prompt("Задайте температуру в градусах Цельсия");
let F = (C * 9/5) + 32;
alert("Температура в градусах Фаренгейта: " + F);

// Number: divide

let number1 = +prompt("Введите делимое число:");
let number2 = +prompt("Введите делитель етого числа:");

let result = Math.floor(number1 / number2);
let remainder = number1 % number2;

alert("Результат: " + result);
alert("Остаток: " + remainder);

// Number: currency

const rate = 8.84;

let amount = +prompt("Введите сумму в злотых:");
let exchangedAmount = (amount * rate).toFixed(2);

alert("Сумма в гривне: " + exchangedAmount);

// Number: RGB
const red = +prompt("red");
const green = +prompt("green");
const blue = +prompt("blue");

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
    
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  rgbToHex(red, green, blue)
// Number: flats
const levels = +prompt("кількість поверхів");
const flats = +prompt("квартир на поверсі");
const flatsNum = +prompt("номер квартири");
const finder = () => {
    // Знаходимо кількість квартир в підїзді 
    const numOfFlats = levels * flats;
    // Знаходимо номер підїзду діленням номера квартири на кількість квартир в підїзді
    const numOfPodezd = Math.ceil(flatsNum / numOfFlats);
    // знаходимо номер квартири у підїзді 
    let numInLevel = flatsNum % numOfFlats;
        if (numInLevel === 0){
        numInLevel = numOfFlats
}
    const numOfLevel = Math.ceil(numInLevel / flats)
    return ["номер під,їзду:" + numOfPodezd,"номер поверху:" + numOfLevel]
}
finder()