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

    generateMenu();

    const generateNewBtn =
    document.getElementById("generate-new-btn");

    generateNewBtn.addEventListener("click", () => {

    generateMenu();
    });
});

/* навігація */

const homeLink = document.getElementById("home-link");
const calcLink = document.getElementById("calc-link");
const contactLink = document.getElementById("contact-link");

homeLink.addEventListener("click", () => {
    document.getElementById("start-screen").scrollIntoView({
        behavior: "smooth"
    });
});

calcLink.addEventListener("click", () => {
    document.getElementById("form-screen").scrollIntoView({
        behavior: "smooth"
    });

    formScreen.classList.remove("hide");
});

contactLink.addEventListener("click", () => {
    document.getElementById("contacts").scrollIntoView({
        behavior: "smooth"
    });
});

const foods = [
        { name: "Банан", calories: 89, image: "банан.jpg" },
        { name: "Яблуко", calories: 52, image: "яблуко.jpg" },
        { name: "Груша", calories: 57, image: "груша.jpg" },
        { name: "Апельсин", calories: 47, image: "апельсин.jpg" },
        { name: "Мандарин", calories: 53, image: "мандарин.jpg" },
        { name: "Полуниця", calories: 32, image: "полуниця.jpg" },
        { name: "Виноград", calories: 69, image: "виноград.jpg" },
        { name: "Ківі", calories: 61, image: "ківі.jpg" },
    
        { name: "Куряче філе", calories: 165, image: "куряче філе.jpg" },
        { name: "Індичка", calories: 135, image: "індичка.jpg" },
        { name: "Яловичина", calories: 250, image: "яловичина.jpg" },
        { name: "Свинина", calories: 242, image: "свинина.jpg" },
        { name: "Лосось", calories: 208, image: "лосось.jpg" },
        { name: "Тунець", calories: 132, image: "тунець.jpg" },
        { name: "Креветки", calories: 99, image: "креветки.jpg" },
    
        { name: "Рис", calories: 130, image: "рис.jpg" },
        { name: "Гречка", calories: 110, image: "гречка.jpg" },
        { name: "Вівсянка", calories: 350, image: "вівсянка.jpg" },
        { name: "Булгур", calories: 342, image: "булгур.jpg" },
        { name: "Кускус", calories: 376, image: "кускус.jpg" },
        { name: "Макарони", calories: 131, image: "макарони.jpg" },
        { name: "Картопля", calories: 77, image: "картопля.jpg" },
    
        { name: "Хліб", calories: 265, image: "хліб.jpg" },
        { name: "Лаваш", calories: 275, image: "лаваш.jpg" },
        { name: "Тост", calories: 290, image: "тост.jpg" },
    
        { name: "Сир твердий", calories: 402, image: "сир твердий.jpg" },
        { name: "Сир кисломолочний", calories: 121, image: "сир кисломолочний.jpg" },
        { name: "Йогурт", calories: 60, image: "йогурт.jpg" },
        { name: "Кефір", calories: 51, image: "кефір.jpg" },
        { name: "Молоко", calories: 60, image: "молоко.jpg" },
    
        { name: "Яйця", calories: 155, image: "яйця.jpg" },
        { name: "Омлет", calories: 154, image: "омлет.jpg" },
    
        { name: "Огірок", calories: 15, image: "огірок.jpg" },
        { name: "Помідор", calories: 18, image: "помідор.jpg" },
        { name: "Броколі", calories: 34, image: "броколі.jpg" },
        { name: "Капуста", calories: 25, image: "капуста.jpg" },
        { name: "Морква", calories: 41, image: "морква.jpg" },
    
        { name: "Горіхи", calories: 607, image: "горіхи.jpg" },
        { name: "Мигдаль", calories: 579, image: "мигдаль.jpg" },
        { name: "Фундук", calories: 628, image: "фундук.jpg" },
    
        { name: "Авокадо", calories: 160, image: "авокадо.jpg" },
        { name: "Фасоля", calories: 127, image: "фасоля.jpg" },
        { name: "Сочевиця", calories: 116, image: "сочевиця.jpg" },
        { name: "Хумус", calories: 166, image: "хумус.jpg" }
];

function generateMenu() {

    const menuContainer =
        document.getElementById("menu-result");

    menuContainer.innerHTML = "";

    let usedIndexes = [];

    for (let i = 0; i < 6; i++) {

        let randomIndex;

        do {
            randomIndex =
                Math.floor(Math.random() * foods.length);
        }
        while (usedIndexes.includes(randomIndex));

        usedIndexes.push(randomIndex);

        const food = foods[randomIndex];

        menuContainer.innerHTML += `
            <div class="food-card">
                <img src="${food.image}" class="food-image">
                <div class="food-name">${food.name}</div>
                <div class="food-calories">
                    ${food.calories} ккал
                </div>
            </div>
        `;
    }
};

const showMoreBtn =
    document.getElementById("show-more-btn");

const premiumPopup =
    document.getElementById("premium-popup");

showMoreBtn.addEventListener("click", () => {

    premiumPopup.classList.remove("hide");

});
