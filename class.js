// Rewrite to class
class Clock {
    constructor(options) {
        this._template = options.template;
        this._timer;
    }
    _render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let min = date.getMinutes();
        if (min < 10) min = '0' + min;

        let sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;

        let output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

        console.log(output);
    }
    stop() {
        clearInterval(this._timer);
    }
    start() {
        this._render();
        this._timer = setInterval(() => this._render(), 1000);
    }
}

// Extended clock
class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        this._precise = +options.precise || 1000;
    }

    start() {
        this._render();
        this._timer = setInterval(() => this._render(), this._precise);
    }
}

// let clock = new Clock({
//     template: 'h:m:s'
// });
// clock.start();