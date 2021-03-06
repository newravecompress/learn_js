// Перепишите цикл через map
var arr = ["Есть", "жизнь", "на", "Марсе"];
let arrLength = arr.map(item => item.length);
// alert(arrLength);


// Массив частичных сумм
let arr = [1, 2, 3, 4, 5];
function getSums(arr) {
    let sums = [];
    var result = arr.reduce(function (sum, current) {
        let tmp = sum + current;
        sums.push(tmp);
        return tmp;
    }, 0);
    return sums;
}

// Другой вариант
function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    var totalSum = arr.reduce(function (sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}
alert(getSums(arr));
