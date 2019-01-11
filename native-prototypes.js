// Добавить функциям defer
// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// }

// function f() {
//   alert( "привет" );
// }

// f.defer(1000); // выведет "привет" через 1 секунду


// Добавить функциям defer с аргументами
// Function.prototype.defer = function (ms) {
//     let f = this;
//     return function () {
//         setTimeout(() => {
//             f.apply(this, arguments);
//         }, ms);
//     }
// }

// Вариант с ...spread
Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.