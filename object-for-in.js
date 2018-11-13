// Определите, пуст ли объект
function isEmptyObj() {
    function isEmpty(obj) {
        for (key in obj) {
            return false;
        }
        return true;
    }
    var schedule = {};

    alert(isEmpty(schedule)); // true

    schedule["8:30"] = "подъём";

    alert(isEmpty(schedule)); // false
}


// Сумма свойств
function sumValues() {
    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    let sum = 0;
    for (key in salaries) {
        sum += salaries[key];
    }
    return sum;
}


// Свойство с наибольшим значением
function maxValue() {
    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    let max = 0;
    let name = '';
    for (key in salaries) {
        if (salaries[key] > max) {
            max = salaries[key];
            name = key;
        }
    }
    return name || 'Нет сотрудников';
}


// Умножьте числовые свойства на 2
function multiplyNum(obj) {
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
    for (key in obj) {
        if (!isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}