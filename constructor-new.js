// Создать Calculator при помощи конструктора
function Calculator() {
    this.sum = function () {
        return this.a + this.b;
    },

        this.mul = function () {
            return this.a * this.b;
        },

        this.read = function () {
            this.a = +prompt('a?', 0);
            this.b = +prompt('b?', 0);
        }
}

// var calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );


// Создать Accumulator при помощи конструктора
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Добавьте значение', 0);
    }
}

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение


// Создайте калькулятор
function Calculator() {
    var methods = {
        "-": function (a, b) {
            return a - b;
        },
        "+": function (a, b) {
            return a + b;
        }
    };

    this.calculate = function (str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}

var powerCalc = new Calculator;
powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert(result); // 8

// var calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10