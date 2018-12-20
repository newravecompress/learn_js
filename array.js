// Создание и изменение массива
function create() {
    let styles = ['Джаз', 'Блюз'];
    styles.push('Рок-н-ролл');
    styles[styles.length - 2] = 'Классика';
    alert(styles.shift());
    styles.unshift('Rap', 'Reggai');
    console.log(styles);
}


// Получить случайное значение из массива
function rand() {
    let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    function radnomElement(arr) {
        alert(arr[Math.floor(Math.random() * arr.length)]);
    }
    radnomElement(arr);
    radnomElement(arr);
    radnomElement(arr);
}
// rand();


// Создайте калькулятор для введенных значений
function calc() {
    let numbers = [];
    let sum = 0;
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    while (true) {
        let num = prompt('Введите число:', 0);
        if (!isNumeric(num)) {
            for (let num of numbers) {
                sum += num;
            }
            alert(sum);
            break;
        }
        numbers.push(+num);
    }
}
// calc();

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("A number please?", 0);
        // should we cancel?
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// alert(sumInput());


// Поиск в массиве
function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}


// Фильтр диапазона
function filterRange(arr, min, max) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);
// console.log(filtered);


// Решето Эрастофена 
// TODO: доделать
