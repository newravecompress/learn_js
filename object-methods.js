// Создайте калькулятор
var calculator = {
    sum() {
        return this.a + this.b;
    },
  
    mul() {
        return this.a * this.b;
    },
  
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// Цепочка вызовов
var ladder = {
    step: 0,
    up() { // вверх по лестнице
        this.step++;
        return this;
    },
    down() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep() { // вывести текущую ступеньку
        alert( this.step );
        return this;
    }
};
ladder.up().up().down().up().down().showStep(); 