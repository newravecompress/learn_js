// Первый объект
let user = {};
user['name'] = 'Вася';
user['surname'] = 'Петров';

user['name'] = 'Сергей';
delete user['name'];

console.log(user);
