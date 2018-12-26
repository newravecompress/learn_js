// Создайте дату
var date = new Date(2012, 1, 20, 3, 12);
// alert(date);


// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате 
// „пн“, „вт“, … „вс“
function getWeekDay(date) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];
}
// let date = new Date(2012, 0, 3);  // 3 января 2012
// alert( getWeekDay(date) ); 
// С помощью localestring
// alert(date.toLocaleString('ru', {weekday: 'short'}));


// День недели в европейской нумерации
function getLocalDay(date) {
    let day = date.getDay();
    day = day == 0 ? 7 : day;
    return day;
}
// alert(getLocalDay(date));


// День указанное количество дней назад
let d = new Date(2015, 0, 2);
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy;
}
// alert(getDateAgo(d, 1)); // 1, (1 января 2015)
// alert(getDateAgo(d, 2)); // 31, (31 декабря 2014)
// alert(getDateAgo(d, 365)); // 2, (2 января 2014)


// Последний день месяца
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
// alert(getLastDayOfMonth(2012, 1));


// Сколько секунд прошло сегодня?
function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
}
// alert(getSecondsToday());


// Сколько секунд до завтра?
function getSecondsToTomorrow() {
    var now = new Date();

    // создать объект из текущей даты + 1 день, без часов-минут-секунд
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    var diff = tomorrow - now; // разница в миллисекундах
    return Math.floor(diff / 1000); // перевести в секунды
}


// Вывести дату в формате дд.мм.гг
function formatDate(date) {
    let year = date.getFullYear() % 100;
    let month = date.getMonth() + 1;
    let day = date.getDate();

    year = year < 10 ? '0' + year : year;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return (day + '.' + month + '.' + year);
}
// alert(formatDate(new Date()));


// Относительное форматирование даты
function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(diff / 1000 / 60);

    if (seconds < 1)
        return 'только что';
    else if (seconds < 60)
        return seconds + ' секунд назад';
    else if (minutes < 60)
        return minutes + ' минут назад';

    // форматировать дату, с учетом того, что месяцы начинаются с 0
    var d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
alert(formatDate(new Date(new Date - 1))); // "только что"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

alert(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"