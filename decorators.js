// Логирующий декоратор (1 аргумент)
function work(a) {
    console.log(a);
}

function makeLogging(f, log) {
    return (a) => {
        log.push(a);
        return f.call(this, a);
    }
}

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//     alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
// }


// Логирующий декоратор (много аргументов)
function work(a, b) {
    alert(a + b); // work - произвольная функция
}

function makeLogging(f, log) {
    return function () {
        let args = [].slice.call(arguments);
        log.push(args);
        return f.apply(this, args);
    }
}

// var log = [];
// work = makeLogging(work, log);

// work(1, 2); // 3
// work(4, 5); // 9

// for (var i = 0; i < log.length; i++) {
//     var args = log[i]; // массив из аргументов i-го вызова
//     alert('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
// }


//  Кеширующий декоратор
function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cache = {};

    return function (x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert(a == b); // true (значение закешировано)

b = f(2);
alert(a == b); // false, другой аргумент => другое значение 