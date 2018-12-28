// Output every second
// function printNumbers(from, to) {
//     // setInterval
//     let cnt = from;
//     let timer = setInterval(() => {
//         console.log(cnt++);
//         if (cnt > to)
//             clearInterval(timer);
//     }, 1000);
// }
function printNumbers(from, to) {
    // setTimeout
    let cnt = from;
    setTimeout(function run() {
        console.log(cnt++);
        if (cnt <= to)
            setTimeout(run, 1000);
    }, 1000);
}
// printNumbers(2, 100);


// Rewrite setTimeout with setInterval
let i = 0;
let start = Date.now();
// function count() {
//     if (i == 1000000000) {
//         alert("Done in " + (Date.now() - start) + 'ms');
//     } else {
//         setTimeout(count, 0);
//     }
//     // a piece of heavy job
//     for (let j = 0; j < 1000000; j++) {
//         i++;
//     }
// }
function count() {
    let interval = setInterval(() => {
        for (let j = 0; j < 1000000; j++) {
            i++;
        }
        if (i == 1000000000) {
            alert("Done in " + (Date.now() - start) + 'ms');
            clearInterval(interval);
        }
    }, 0);
}
// count();


// Функция-задержка
function delay(f, ms) {
    return function () {
        setTimeout(() => {
            f.apply(this, arguments)
        }, ms);
    }
}

function f(x) {
    alert(x);
}

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);

// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


// Вызов не чаще чем в N миллисекунд
function debounce(f, ms) {
    let timer;
    return function () {
        clearInterval(timer);
        timer = setTimeout(() => {
            f.apply(this, arguments)
        }, ms);
    }
}

var f = debounce(f, 1000);

f("тест"); // выведет "тест" через 1000 миллисекунд
f("тест2");