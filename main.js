var firstTerm = parseFloat(prompt('Введите первое слагаемое')),
    secondTerm = parseFloat(prompt('Введите второе слагаемое'));

sum = firstTerm + secondTerm;

alert('Сумма = ' + sum);



var number   = parseFloat(prompt('Введите число')),
    plus     = parseFloat(prompt('Сколько прибавить к предыдущему числу?')),
    minus    = parseFloat(prompt('Сколько отнять от предыдущего результата?')),
    multiply = parseFloat(prompt('На сколько умножить предыдущий результат?')),
    divide   = parseFloat(prompt('На сколько разделить предыдущий результат?')),
    result   = (number + plus - minus) * multiply / divide;

alert('(' + number + ' + ' + plus + ' - ' + minus + ')' +  ' * ' + multiply + ' / ' + divide + ' = ' + result);



var a = 14,
    b = 27;

    a += b;
    b = a-b;
    a -= b;

    alert('Число а = ' + a  + ', число b = ' + b);
