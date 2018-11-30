// Запускать только при включенной кофеварке
function Machine(power) {
    this._power = power; // (1)

    this._enabled = false;

    this.enable = function () {
        this._enabled = true;
    };

    this.disable = function () {
        this._enabled = false;
    };
}
function CoffeeMachine(power, capacity) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    let timer;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / this._power;
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
        if (!this._enabled)
            throw new Error('Кофеварка выключена!');
        timer = setTimeout(() => {
            timer = null;
            onReady()
        }, getTimeToBoil());
    };

    this.isRunning = function () {
        return !!timer;
    }

    let parentDisable = this.disable;
    this.disable = function(args) {
        parentDisable.apply(this, args);
        clearTimeout(timer);
    }
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ошибка, кофеварка выключена!
coffeeMachine.disable();


// Унаследуйте холодильник  
function Fridge(power) {
    Machine.apply(this, arguments);

    let food = [];
    let capacity = power / 100;

    this.addFood = function(item) {
        if (!this._enabled) {
            throw new Error('Холодильник выключен, еду добавить нельзя!');
        }
        if (food.length + arguments.length > capacity) {
            throw new Error('Холодильник заполнен!');
        }

        food.push.apply(food, arguments);
    };

    this.getFood = function() {
        return food.slice();
    };

    this.filterFood = function(func) {
        return food.filter(func);
    };

    this.removeFood = function(foodName) {
        food = food.filter((item) => item.title != foodName.title);
    }

    let parentDisable = this.disable;

    this.disable = function(args) {
        if (food.length) 
            throw new Errror('Нельзя выключать холодильник с едой!');
        parentDisable.apply(this, args);
    }
}

// var fridge = new Fridge(200);
// fridge.addFood("котлета"); // ошибка, холодильник выключен

// создать холодильник мощностью 500 (не более 5 еды)
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
// console.log(fridge.getFood());


// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");

// var fridgeFood = fridge.getFood();
// alert( fridgeFood ); // котлета, сок, варенье

// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");

// alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2
