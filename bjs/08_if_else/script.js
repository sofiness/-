
let minValue = parseInt(prompt('Минимальное значение числа для игры', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное значение числа для игры', '100')) || 100;

minValue = (minValue > 999) ? 999 : (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : (maxValue < -999) ? -999 : maxValue;


if (isNaN(minValue)) {
    minValue = 0;
}

if (isNaN(maxValue)) {
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numToWords(answerNumber)}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры', '0')) || 0;
    maxValue = parseInt(prompt('Максимальное значение числа для игры', '100')) || 100;

    if (isNaN(minValue)) {
        minValue = 0;
    }

    if (isNaN(maxValue)) {
        maxValue = 100;
    }

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = 0;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${numToWords(answerNumber)}?`;
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ?
                'Вы загадали неправильное число!\n\u{1F914}' :
                (phraseRandom === 1) ?
                'Я сдаюсь..\n\u{1F92F}' :
                'Вы загадали кринж...';

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${numToWords(answerNumber)}?`;
        }
    }
});

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ?
                'Вы загадали неправильное число!\n\u{1F914}' :
                (phraseRandom === 1) ?
                'Я сдаюсь..\n\u{1F92F}' :
                'Вы загадали кринж...';

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${numToWords(answerNumber)}?`;
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerRandom = Math.round(Math.random() * 2);
        const answerPhrase = (answerRandom === 0) ?
            'Соу изи)' :
            (answerRandom === 1) ?
            'Я ИИ, мне всё легко' :
            'Да сколько можно, это же элементарно!';

        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

function numToWords(num) {
    const UNITS = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const TEENS = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const TENS = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const HUNDREDS = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    
    if (num === 0) {
        return 'ноль';
    }
    
    if (num < 0) {
        return 'минус ' + numToWords(Math.abs(num));
    }
    
    let result = '';
    
    if (num >= 1000) {
        result += numToWords(Math.floor(num / 1000)) + ' тысяч ';
        num %= 1000;
    }
    
    if (num >= 100) {
        result += HUNDREDS[Math.floor(num / 100)] + ' ';
        num %= 100;
    }
    
    if (num >= 20) {
        result += TENS[Math.floor(num / 10)] + ' ';
        num %= 10;
    }
    
    if (num >= 10) {
        result += TEENS[num - 10];
        return result;
    }
    
    if (num > 0) {
        result += UNITS[num];
    }
    
    return result.trim();
}