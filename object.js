// Первый объект
let user = {};
user['name'] = 'Вася';
user['surname'] = 'Петров';

user['name'] = 'Сергей';
delete user['name'];

// console.log(user);


// Check for emptiness
function isEmpty(obj) {
    for (let item in obj)
        return false;
    return true;
}

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sumObj(obj) {
    let sum = 0;
    for (let item in obj)
        sum += obj[item];
    return sum;
}


// Multiply numeric properties by 2
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
console.log(menu);

function multiplyNumeric(obj) {
    for (let item in obj) {
        if (typeof (obj[item]) == 'number')
            obj[item] *= 2;
    }
}