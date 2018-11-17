// Сумма через замыкание
function sum(a) {
    return function(b) {
        return a + b;
    }
}
// alert(sum(1)(2));
// alert(sum(5)(-1));


// Функция - строковый буфер
function makeBuffer() {
    var text = '';

    return function buffer(str) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    }
}

// var buffer = makeBuffer();
// buffer(0);
// buffer(1);
// buffer(0);

// alert( buffer() ); // '010'


// Строковый буфер с очисткой
function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    }

    buffer.clear = () => text = '';

    return buffer;
}

// var buffer = makeBuffer();

// buffer("Тест");
// buffer(" тебя не съест ");
// alert( buffer() ); // Тест тебя не съест

// buffer.clear();

// alert( buffer() ); // ""


// Фильтрация через функцию
function filter(arr, func) {
    return arr.filter(func)
}

function inBetween(a, b) {
    return (x) => x >= a && x <= b;
}

function inArray(arr) {
    return (x) => arr.indexOf(x) != -1;
}

// var arr = [1, 2, 3, 4, 5, 6, 7];

// alert(filter(arr, function(a) {
//   return a % 2 == 0
// })); // 2,4,6

// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
// alert(arr);


// Армия функций
function makeArmy() {

    var shooters = [];
  
    // Первый способ - с помощью замыкания и вспомогательной функции
    // for (var i = 0; i < 10; i++) {
    //     var shooter = function(i) {
    //         return () => alert( i );
    //     }(i);
    //     shooters.push(shooter);
    // }

    // Второй способ - с помощью замыкания и вызова функции на месте
    for (var i = 0; i < 10; i++)
        (function(i) {
            var shooter = function() {
                alert( i );
            };
            shooters.push(shooter);
        })(i);
  
    return shooters;
  }
  
  var army = makeArmy();
  army[0](); // стрелок выводит 10, а должен 0
  army[5]();

        
       
         