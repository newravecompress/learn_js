// Вывод чисел каждые 100 мс
function printNumbersInterval(x) {
    let cnt = 1;
    let timer = setInterval(() => {
        console.log(cnt++);
        if (cnt > x)
            clearInterval(timer);
    }, 100);
}
// printNumbersInterval(20);


// Вывод чисел каждые 100 мс, через setTimeout
function printNumbersInterval(x) {
    let cnt = 1;
    setTimeout(function run() {
        console.log(cnt++);
        if (cnt <= x)
            setTimeout(run, 100);
    }, 100);
}
// printNumbersInterval(20);


// Функция-задержка
function delay(f, ms) {
    return function() {
        setTimeout(() => {
            f.apply(this, arguments)
        }, ms);
    }
}

function f(x) {
  alert( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд