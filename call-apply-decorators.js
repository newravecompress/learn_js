// Spy decorator
function spy(func) {
    function wrapper() {
        wrapper.calls.push(Array.from(arguments));
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}
function work(a, b) {
    alert(a + b); // work is an arbitrary function or method
}
work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }


// Delaying decorator
function delay(f, ms) {
    return function () {
        setTimeout(() => {
            f.apply(this, arguments)
        }, ms);
    }
}
// function f(x) {
//     alert(x);
// }
// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms


// Debounce decorator
function debounce(f, ms) {
    let timer;
    return function () {
        if (timer) return;

        f.apply(this, arguments);
        timer = true;

        setTimeout(() => timer = false, ms);
    }
}
// let f = debounce(alert, 1000);

// f(1); // runs immediately
// f(2); // ignored

// setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
// setTimeout(() => f(4), 1100); // runs
// setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)


// Throttle decorator
function throttle(f, ms) {
    let timer = false;
    let last_args;
    let last_this;

    return function () {
        if (timer) {
            last_args = arguments;
            last_this = this;
            return;
        }

        f.apply(this, arguments);
        timer = true;

        setTimeout(() => {
            timer = false;
            f.apply(last_this, last_args);
        }, ms);
    }
}
function f(a) {
    console.log(a)
};

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored

// Вариант из учебника
function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}