// Задание 1

var Object = {name: 'Vasya',
               age: 23  };

function isEmpty(obj) {
    for (var K in obj) {
        return false
    } return true
}

console.log(isEmpty(Object));



// Задание 2

var x = parseFloat(prompt('Введите x')),
    n = parseFloat(prompt('Введите степень x'));

var result = x;
function pow(x, n) {
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

if (x < 1) {
    alert('Это значение x не поддерживается, введите целое число большее или равное 1');
}  else if (n < 1) {
    alert('Это значение степени x не поддерживается, введите целое число большее или равное 1');
}  else {
    alert(pow(x, n));
}



// Задание 3

// Цикл

var n = parseInt(prompt('Введите n')),
    result = 0;

function sumTo(n) {
  for (var i = n; i !== 0; i--) {
      result = result + i;
  }
  return result;
}
alert(sumTo(n));



// Рекурсия

var n = parseInt(prompt('Введите n'));

function sumTo(n) {
    if (n === 1) {
        return n;

    }
    return n + sumTo(n - 1);
}
alert(sumTo(n));



// Формула арифметической прогрессии

var n  = parseInt(prompt('Введите n'));

function sumTo(n) {
   return ((1 + n) * n) / 2 ;
}
alert(sumTo(n));
