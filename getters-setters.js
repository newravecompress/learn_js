// Написать объект с геттерами и сеттерами

function User() {
    let firstName, surname;

    this.setFirstName = function (name) {
        firstName = name;
    }
    this.setSurname = function (name) {
        surname = name;
    }
    this.getFullName = function () {
        return firstName + ' ' + surname;
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

// alert(user.getFullName()); // Петя Иванов


// Добавить геттер для power
function CoffeeMachine(power, capacity) {
    //...
    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };
    this.getPower = function () {
        return power;
    }
}


// Добавить публичный метод кофеварке
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function () {
        setTimeout(onReady, getTimeToBoil());
    };

    this.addWater = function (amount) {
        this.setWaterAmount(waterAmount + amount);
    };
}

// var coffeeMachine = new CoffeeMachine(100000, 400);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
// coffeeMachine.run();


// Создать сеттер для onReady
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function (amount) {
        return waterAmount;
    };

    onReady = function () {
        alert('Кофе готов!');
    }

    this.setOnReady = function (func) {
        onReady = func;
    }

    this.run = function () {
        setTimeout(() => onReady(), getTimeToBoil());
    };
}

// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(150);
// coffeeMachine.run();
// coffeeMachine.setOnReady(function () {
//     var amount = coffeeMachine.getWaterAmount();
//     alert('Готов кофе: ' + amount + 'мл'); // Кофе готов: 150 мл
// });


// Добавить метод isRunning
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function (amount) {
        return waterAmount;
    };

    onReady = function () {
        alert('Кофе готов!');
    }

    this.setOnReady = function (func) {
        onReady = func;
    }

    let running = false;

    this.run = function () {
        running = true;
        setTimeout(() => {
            running = false;
            onReady()
        }, getTimeToBoil());
    };

    this.isRunning = function () {
        return running;
    }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert('До: ' + coffeeMachine.isRunning()); // До: false

coffeeMachine.run();
alert('В процессе: ' + coffeeMachine.isRunning()); // В процессе: true

coffeeMachine.setOnReady(function () {
    alert("После: " + coffeeMachine.isRunning()); // После: false
});