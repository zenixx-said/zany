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