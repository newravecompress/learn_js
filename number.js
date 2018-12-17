// Интерфейс суммы
function sum_interface() {
    let first_num = prompt('Enter first number: ');
    let second_num = prompt('Enter second num: ');

    sum = parseFloat(+first_num) + parseFloat(+second_num);
    alert(sum);
}


// Repeat until the input is a number
function readNumber() {
    while (true) {
        let num = prompt('Enter a number: ', 0);
        if (num === null || num === '')
            return null;
        else if (isFinite(num))
            return Number(num);
    }
}
alert(`Read: ${readNumber()}`);


// Сложение цен
function adding() {
    alert(0.1 + 0.2 + '$');
    alert(parseFloat(0.1) + parseFloat(0.2) + '$');
    alert((0.1 * 100 + 0.2 * 100) / 100 + '$');
    var price1 = 6.35, price2 = 0.5;
    alert(+(price1 + price2).toFixed(1));
}


// Формула Бине
function formula(n) {
    let phi = (1 + Math.sqrt(5)) / 2;

    return Math.pow(phi, n) / Math.sqrt(5);
}


// случайное из интервала (0, max), не включая max
function randMax(max) {
    return Math.random() * max;
}


// Случайное из интервала (min, max), не включая max
function randMinMax(min, max) {
    return min + Math.random() * (max - min);
}


// Случайное целое от min до max
function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
// console.log(randInt(5, 10));
