// Set and decrease for counter
// function makeCounter() {
//     // via property
//     let counter = function() {
//         return counter.count++;
//     }
//     counter.count = 0;
//     counter.set = function(value) {
//         counter.count = value;
//     }
//     counter.decrease = function() {
//         return counter.count--;
//     }
//     return counter;
// }

function makeCounter() {
    // via closure
    let count = 0;
    let counter = () => count++;
    counter.set = (value) => count = value;
    counter.decrease = () => count--;
    return counter;
}
// let counter = makeCounter();
// alert(counter());
// alert(counter());
// alert(counter.set(10));
// alert(counter.decrease());


// Sum with an arbitrary amount of brackets
function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = () => currentSum;

    return f;
}

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15