// Добавить класс в строку
function addClass(obj, cls) {
    let classList = obj['className'] ? obj['className'].split(' ') : [];
    if (classList.indexOf(cls) == -1) {
        classList.push(cls);
        obj['className'] = classList.join(' ');
    }
}
var obj = {
    className: 'open menu'
}
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

// alert( obj.className ); // "open menu new me"


// Перевести текст вида border-left-width в borderLeftWidth
function camelize(str) {
    let list = str.split('-');
    for (let i = 1; i < list.length; i++) {
        list[i] = list[i].charAt(0).toUpperCase() + list[i].slice(1);
    }
    return list.join('');
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
var obj = {
    className: 'my menu menu'
};
// removeClass(obj, 'menu');


// Фильтрация массива "на месте"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}
arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
// alert( arr );


// Сортировать в обратном порядке
var arr = [5, 2, 1, -10, 8];
// alert(arr.sort((a, b) => {return b - a}))


// Скопировать и отсортировать массив
var arr = ["HTML", "JavaScript", "CSS"];
function arrSorted(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }

    return newArr.sort();
}
// alert( arrSorted(arr) ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
// Короткий вариант: 
var arrSorted = arr.slice().sort();


// Случайный порядок в массиве
var arr = [1, 2, 3, 4, 5];
arr.sort((a, b) => { return Math.random() - 0.5; });
// alert( arr );


// Сортировка объектов
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka];

people.sort((a, b) => {
    return a['age'] - b['age'];
})

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
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
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
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    return Object.keys(obj);
}
var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];
alert(unique(strings));