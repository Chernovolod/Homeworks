// Задание 1

function isPalindrom(S) {
    var arr = S.split('').reverse().join('');
    console.log(arr);
    if (arr === S) {
        return true;
    } else {
        return false;
    }

}
console.log (isPalindrom('шалашш'));



// Задание 2

function isAnagram(S1, S2) {
    var arr  = S1.split('').sort().join('');
    var arr2 = S2.split('').sort().join('');

    console.log(arr);
    console.log(arr2);

    if (arr === arr2) {
        return true;
    } else {
        return false;
    }

}
console.log(isAnagram('пупсик', 'пупкис'));



// Задание 3

function toFindVowels(S) {
    var arr = S.match(/[аэоуыиеёюя]/g);
    
    console.log('Гласных :  ' + arr.length);
}
toFindVowels('написать функцию, которая будет возвращать количество гласных в переданном тексте.');



// Задание 4

function reBuild(S) {
    var arr  = S.split(/[!?.]/g),
        arr2 = [];

    for (var i = 0; i < arr.length -1; i++) {

        arr2.push(arr[i].split(/[ ,()-:;\/+#$%^&<>='"|`~@№_.]/g).join('').length)
        console.log(arr[i] + '   : ' + arr2[i]);

    }

}
reBuild('Текст, в котором есть буквы! Без пробелов, символов и прочего. Можно писать, любой текст? Будут убраны любые символы -:;"|~@№_.');
