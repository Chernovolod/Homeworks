// Задание 1

var login = prompt('Введите логин'),
    password;

if (login == 'Админ') {
    password = prompt('Введите пароль');
        if (password == 'Черный Властелин') {
            alert('Добро пожаловать!')
        } else if (password == null) {
            alert('Вход отменен')
        } else {
            alert('Пароль неверен!')
        }
} else if (login == null) {
    alert('Вход отменен')
} else {
    alert('Я вас не знаю!')
};

// Задание 1 через switch

var login = prompt('Введите логин'),
    password;

switch (login) {
    case 'Админ' :
        password = prompt('Введите пароль');
            switch (password) {
                case 'Черный Властелин' :
                    alert('Добро пожаловать');
                    break;
                case null :
                    alert('Вход отменен');
                    break;
                default :
                    alert('Я вас не знаю!');
                    break;
            }
            break;
    case null :
        alert('Вход отменен');
        break;
    default :
        alert('Я вас не знаю!');
        break;
}


// Задание 2

var login = prompt('Введите имя пользователя'),
    message;

(login == 'Вася') ?
    message = alert('Привет') : (login == 'Директор') ?
                                    message = alert('Здравствуйте') : (login === '') ?
                                                                            message = alert('Нет логина') : message = alert('');



// Задание 3

for (var i = 2; i <= 10 ; i++) {
    if ( i % 2 == 0) {
        alert(i);
    }
}


// Задание 4

 var arr = [];


 while (true) {
     var question = parseFloat(prompt('Введите любое число'));
     if (isNaN(question) || question == null || question === '' ) break;
     arr.push(question);

 }

var result = arr.reduce(function(sum, current) {
    return sum + current
});

alert( result );



// Задание 5

var arr  = [1, -2, 3, 4, -2, 8, -3, 0],
    arr2 = [];

for (var i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {

        arr2[i] = arr[i];

    }

}

console.log(arr2);


var arr  = ['asdf', 'adfsadfasd', 'asfasd', 'asf'],
    arr2 = [];

for (var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i].length;
}

console.log(arr2);
