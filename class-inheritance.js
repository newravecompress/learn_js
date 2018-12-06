// Класс часы
function ClockFunctional(options) {

    var template = options.template;
    var timer;

    function render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var min = date.getMinutes();
        if (min < 10) min = '0' + min;

        var sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;

        var output = template.replace('h', hours).replace('m', min).replace('s', sec);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    }
}

// В виде прототипа:
function Clock(options) {
    this._template = options.template;
    this._timer;
}
Clock.prototype._render = function () {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
}
Clock.prototype.stop = function () {
    clearInterval(this._timer);
};
Clock.prototype.start = function () {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
}

// var clock = new Clock({
//     template: 'h:m:s'
// });
// clock.start();


// Класс расширенные часы
function PreciseClock(options) {
    Clock.call(this, options);
    this._precise = +options.precise || 1000;
}
PreciseClock.prototype = Object.create(Clock.prototype);
PreciseClock.prototype.constructor = PreciseClock;
PreciseClock.prototype.start = function () {
    this._render();
    this._timer = setInterval(() => this._render(), this._precise);
}

// var clock = new PreciseClock({
//     template: 'h:m:s',
//     precise: 2000
// });
// clock.start();


// Меню с таймером для анимации
// TODO: доделать
function Menu(state) {
    this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function () {
    this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function () {
    this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function () {
    switch (this._state) {
        case Menu.STATE_OPEN:
            return 'открыто';

        case Menu.STATE_CLOSED:
            return 'закрыто';
    }
};

Menu.prototype.showState = function () {
    alert(this._stateAsString());
};

var AnimatingMenu = Menu; // замените на ваш код для AnimatingMenu

// использование..

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function () {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
}, 1000);