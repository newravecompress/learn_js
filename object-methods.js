// Создайте калькулятор
var calculator = {
    sum: function() {
        return this.a + this.b;
    },
  
    mul: function() {
        return this.a * this.b;
    },
  
    read: function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
}

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// Цепочка вызовов
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
        return this;
    }
};
ladder.up().up().down().up().down().showStep(); 