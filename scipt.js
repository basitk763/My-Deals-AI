const counterEl = document.querySelector("#num1");
let counterNumber = 0;

const updateCounter = setInterval(function () {
    counterNumber+=100;
    counterEl.textContent = counterNumber;
    if (counterNumber >= 10000) {
        clearInterval(updateCounter);
    }
}, 1)

const counterel = document.querySelector("#num2");
let counternumber = 0;

const updatecounter = setInterval(function () {
    counternumber++;
    counterel.textContent = counternumber;
    if (counternumber >= 90) {
        clearInterval(updatecounter);
    }
}, 1)

const counterE = document.querySelector("#num3");
let counterNmber = 0;

const updateCunter = setInterval(function () {
    counterNmber++;
    counterE.textContent = counterNmber;
    if (counterNmber >=6) {
        clearInterval(updateCunter);
    }
}, 1)

const countE = document.querySelector("#num4");
let countNumber = 0;

const updateCounterr = setInterval(function () {
    countNumber++;
    countE.textContent = countNumber;
    if (countNumber >= 99) {
        clearInterval(updateCounterr);
    }
}, 1)