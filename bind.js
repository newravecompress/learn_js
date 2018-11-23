// Использование функции вопросов
"use strict";
// bind
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function () {
        alert(this.login + ' вошёл в сайт');
    },

    loginFail: function () {
        alert(this.login + ': ошибка входа');
    },

    checkPassword: function () {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
};

// var vasya = user;
// user = null;
// vasya.checkPassword();

// Closure
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function () {
        alert(this.login + ' вошёл в сайт');
    },

    loginFail: function () {
        alert(this.login + ': ошибка входа');
    },

    checkPassword: function () {
        var self = this;
        ask("Ваш пароль?", this.password,
            function () {
                self.loginOk();
            },
            function () {
                self.loginFail();
            }
        );
    }
};

// var vasya = user;
// user = null;
// vasya.checkPassword();


// Использование функции вопросов с карррингом
//bind
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function (result) {
        alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
    },

    checkPassword: function () {
        let self = this;
        ask("Ваш пароль?", this.password,
            function () {
                self.loginDone(true);
            },
            function () {
                self.loginDone(false);
            }
        );
    }
};

// var vasya = user;
// user = null;
// vasya.checkPassword();

// Замыкание
function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function (result) {
        alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
    },

    checkPassword: function () {
        ask("Ваш пароль?", this.password,
            function () {
                this.loginDone.bind(this, true);
            },
            function () {
                this.loginDone.bind(this, false);
            }
        );
    }
};