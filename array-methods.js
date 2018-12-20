// Добавить класс в строку
function addClass(obj, cls) {
    let classList = obj['className'] ? obj['className'].split(' ') : [];
    if (classList.indexOf(cls) == -1) {
        classList.push(cls);
        obj['className'] = classList.join(' ');
    }
}
// var obj = {
//     className: 'open menu'
// }
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'

// alert( obj.className ); // "open menu new me"


// Перевести текст вида border-left-width в borderLeftWidth
function camelize(str) {
    let list = str.split('-');
    for (let i = 1; i < list.length; i++) {
        list[i] = list[i].charAt(0).toUpperCase() + list[i].slice(1);
    }
    return list.join('');
}
// Другой вариант
function camelize(str) {
    return str
        .split('-') // my-long-word -> ['my', 'long', 'word']
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
        .join(''); // ['my', 'Long', 'Word'] -> myLongWord
}
// alert(camelize("background-color"));
// alert(camelize("list-style-image"));
// alert(camelize("-webkit-transition"));


// Функция removeClass
function removeClass(obj, cls) {
    let classList = obj['className'] ? obj['className'].split(' ') : [];

    for (let i = 0; i < classList.length; i++) {
        if (classList[i] == cls) {
            classList.splice(i, 1);
            i--;
        }
    }
    obj['className'] = classList.join(' ');
    alert(obj.className);
}
// var obj = {
//     className: 'my menu menu'
// };
// removeClass(obj, 'menu');


// Filter range
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b)
}
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered); // 3,1 (matching values)
// alert(arr); // 5,3,8,1 (not modified)



// Фильтрация массива "на месте"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
// arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// alert( arr );


// Сортировать в обратном порядке
// var arr = [5, 2, 1, -10, 8];
// alert(arr.sort((a, b) =>  b - a))


// Скопировать и отсортировать массив
// var arr = ["HTML", "JavaScript", "CSS"];
function arrSorted(arr) {
    return arr.slice().sort();
}
// alert( arrSorted(arr) ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
// Короткий вариант: 
// var arrSorted = arr.slice().sort();


// Create an extendable calculator
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


// Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [john, pete, mary];
// let names = users.map(item => item.name);
// // alert( names ); // John, Pete, Mary


// Map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [john, pete, mary];
// let usersMapped = users.map(item => ({
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id
// }));
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // John Smith


// Sort objects
// function sortByName(arr) {
//     arr.sort((a, b) => (b.name > a.name ? 1 : -1));
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ john, pete, mary ];
// sortByName(arr);
// // now: [john, mary, pete]
// alert(arr[1].name); // Mary


// Случайный порядок в массиве
// var arr = [1, 2, 3, 4, 5];
// arr.sort(() => { return Math.random() - 0.5; });
// alert( arr );


// Get average age
// function getAverageAge(arr) {
//     return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// Сортировка объектов
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [vasya, masha, vovochka];

// people.sort((a, b) => {
//     return a['age'] - b['age'];
// })

// теперь people: [vovochka, masha, vasya]
// alert(people[0].age) // 6


// Вывести односвязный список
var list = {
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
function printList(list) {
    console.log(list['value']);
    if (list['next'] != null) {
        printList(list['next']);
    }
}
function printList(list) {
    let tmp = list;

    while (tmp) {
        alert(tml['value']);
        tmp = tmp['next'];
    }
}
function printReverseList(list) {
    if (list['next'] != null) {
        printReverseList(list['next']);
    }
    console.log(list['value']);
}
function printReverseList(list) {
    var arr = [];
    var tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}
// printList(list);


// Отфильтровать анаграммы
// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
// Вернет первые вхождения
function aclean(arr) {
    let tmpSort = [];
    let tmpList = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase().split('').sort().join('');
        if (tmpSort.indexOf(word) == -1) {
            tmpList.push(arr[i]);
            tmpSort.push(word);
        }
    }
    return tmpList;
}

// Другой вариант, вернет последние вхождения
function aclean(arr) {
    // этот объект будем использовать для уникальности
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        // разбить строку на буквы, отсортировать и слить обратно
        var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

        obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
    }

    var result = [];

    // теперь в obj находится для каждого ключа ровно одно значение
    for (var key in obj) result.push(obj[key]);

    return result;
}
// alert(aclean(arr));


// Оставить уникальные элементы массива
function unique(arr) {
    let obj = {};
    for (let item of arr) {
        obj[item] = true;
    }
    return Object.keys(obj);
}
var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];
// alert(unique(strings));