// function formatDate(date) {
//     let newDate;
//     if (typeof date == 'string') {
//         newDate = new Date(Date.parse(date));
//     } else if (typeof date == 'number') {
//         newDate = new Date(date * 1000); // Необходимо передавать миллисекунды
//     } else if (Array.isArray(date)) {
//         newDate = new Date(date[0], date[1], date[2]);
//     } else if ({}.toString.call(date).slice(8, -1) == 'Date') {
//         newDate = date;
//     }

//     let year = newDate.getFullYear() % 100;
//     let month = newDate.getMonth() + 1;
//     let day = newDate.getDate();

//     year = year < 10 ? '0' + year : year;
//     month = month < 10 ? '0' + month : month;
//     day = day < 10 ? '0' + day : day;

//     return (day + '.' + month + '.' + year);
// }

alert(formatDate('2011-10-02')); // 02.10.11
alert(formatDate(1234567890)); // 14.02.09
alert(formatDate([2014, 0, 1])); // 01.01.14
alert(formatDate(new Date(2014, 0, 1))); // 01.01.14


// Еще вариант
function formatDate(date) {
    var type = {}.toString.call(date).slice(8, -1);

    switch (type) {
        case "Number": date = new Date(date * 1000); break;
        case "String": date = new Date(date); break;
        case "Array": date = new Date(date[0], date[1], date[2]); break;
    }

    return date.toLocaleString("ru", { day: '2-digit', month: '2-digit', year: '2-digit' });
}