// Сделать первый символ заглавным
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);

    // return str.charAt(0).toUpperCase() + str.slice(1);
}


// Проверьте спам
function checkSpam(str) {
    if (str.toLowerCase().indexOf('viagra') == -1 ||
        str.toLowerCase().indexOf('xxx') == -1) {
        return false;
    }
    return true;

    // let lowerStr = str.toLowerCase();
    // return lowerStr.includes('viagra') || lowerStr.includes('xxx');
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
    return Number(str.slice(1));
}
