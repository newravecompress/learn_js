// перепишите суммирование аргументов
function sumArgs() {
    let args = [].slice.call(arguments);
    return args.reduce((a, b) => a + b);
}

function sumArgs() {
    // запустим reduce из массива напрямую
    return [].reduce.call(arguments, (a, b) => a + b);
}

// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива


// Примените функцию к аргументам
function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

// alert( applyAll(sum, 1, 2, 3) ); // 6
// alert( applyAll(mul, 2, 3, 4) ); // 24
// alert( applyAll(Math.max, 2, -2, 3) ); // 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2