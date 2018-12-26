// Sum all numbers till the given one
function sumTo(n) {
    // recursive
    return n == 1 ? n : n + sumTo(n - 1);
}
// function sumTo(n) {
//     // loop
//     let res = 1;
//     for (let i = 2; i <= n; i++) {
//         res += i;
//     }
//     return res;
// }
// function sumTo(n) {
//     // progression
//     return n * (1 + n) / 2;
// }
// alert(sumTo(100));


// Calculate factorial
function factorial(n) {
    return n == 1 ? 1 : n * factorial(n - 1);
}
// alert(factorial(5));


// Fibonacci numbers
// function fib(n) {
//     return n <= 1 ? n : fib(n - 2) + fib(n - 1);
// }
function fib(n) {
    // loop
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
// alert(fib(7));


// Output a single-linked list
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// function printList(list) {
//     // recursion
//     console.log(list.value);
//     if (list.next)
//         printList(list.next);
// }
function printList(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
}
// printList(list);


// Output a single-linked list in the reverse order
function printListReverse(list) {
    // recursion
    if (list.next)
        printListReverse(list.next);
    
    console.log(list.value);
}
function printListReverse(list) {
    // loop
    let tmp = list;
    let arr = [];

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    console.log(arr.reverse())
}
// printListReverse(list);
