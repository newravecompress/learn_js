// Сделать первый символ заглавным
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


// Проверьте спам
function checkSpam(str) {
    if (str.toLowerCase().indexOf('viagra') == -1 ||
        str.toLowerCase().indexOf('xxx') == -1) {
        return false;
    }
    return true;
}
// Короткий вариант:
function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}


// Усечение строки
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
    }
    return str;
}


// Выделить число
function extractCurrencyValue(str) {
    return str.slice(1);
}
console.log(truncate("Всем привет!", 20));
