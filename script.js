document.addEventListener('DOMContentLoaded', () => {

    /* екрани */
    const startScreen = document.querySelector('#start-screen');
    const formScreen = document.querySelector('#form-screen');
    const resultScreen = document.querySelector('#result-screen');

    /* кнопки */
    const startBtn = document.querySelector('.ad-btn');
    const calculateBtn = document.querySelector('.raz-btn');

    /* перехід на форму */
    startBtn.addEventListener('click', () => {

        startScreen.classList.add('hide');
        formScreen.classList.remove('hide');

    });

    /* перехід на результат */
    calculateBtn.addEventListener('click', () => {

        formScreen.classList.add('hide');
        resultScreen.classList.remove('hide');

    });

});

/*кнопка*/
const calculateBtn = document.querySelector(".raz-btn");

const weightInput = document.querySelectorAll(".raz-ta")[0];
const heightInput = document.querySelectorAll(".raz-ta")[1];
const ageInput = document.querySelectorAll(".raz-ta")[2];

/*select*/
const activitySelect = document.querySelectorAll(".raz-select")[0];
const genderSelect = document.querySelectorAll(".raz-select")[1];

/*result*/
const maintainCalories = document.getElementById("maintain-calories");
const loseCalories = document.getElementById("lose-calories");
const supportCalories = document.getElementById("support-calories");
const gainCalories = document.getElementById("gain-calories");

const formScreen = document.getElementById("form-screen");
const resultScreen = document.getElementById("result-screen");

calculateBtn.addEventListener("click", function () {

    let weight = Number(weightInput.value);
    let height = Number(heightInput.value);
    let age = Number(ageInput.value);

    let gender = genderSelect.value;
    let activity = activitySelect.value;

    let bmr;

    if (gender === "Чоловік") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    }
    else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    /*коефіціент активності*/
    let activityMultiplier;

    if (activity === "Низька") {
        activityMultiplier = 1.2;
    }
    else if (activity === "Середня") {
        activityMultiplier = 1.55;
    }
    else {
        activityMultiplier = 1.9;
    }

    /*норма калорій*/
    let calories = Math.round(bmr * activityMultiplier);

    /*цілі*/
    let lose = calories - 400;
    let gain = calories + 400;

    /*вивід*/
    maintainCalories.textContent = calories;
    supportCalories.textContent = calories + " ккал";
    loseCalories.textContent = lose + " ккал";
    gainCalories.textContent = gain + " ккал";

    formScreen.classList.add("hide");
    resultScreen.classList.remove("hide");
});
