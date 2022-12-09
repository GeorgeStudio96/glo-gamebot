'use strict'

// Что должна делать программа:
// — спрашивает пользователя: "Угадай число от 1 до 100".
// — если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
// — если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
// — если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
// — если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
// — если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение "Поздравляю, Вы угадали!!!"

let number = 69;



let question = +prompt('Угадай число от 1 до 100');
let again;

const gameBot = function (index) {

    if (index > number) {
        console.log('Загаданное число меньше')
        again = confirm('Хотите повторить снова?')
    } else if (index < number) {
        console.log('Загаданное число больше')
        again = confirm('Хотите повторить снова?')
    }

    console.log(again)

    if (again === true) {
        question = +prompt('Угадай число от 1 до 100');
    } else {
        return
    }



    // question = prompt('Угадай число от 1 до 100')

    // if (question < number) {
    //     console.log('Загаданное число больше')

    // } else if (question > number) {
    //     console.log('Загаданное число меньше')
    // }

}

gameBot(question);











// рекурсивная функция
/*
const potate = 10

const clearPotate = function (index) {

    if (index > 0) {
        console.log('Картошка' + index + 'почищена')
        index--
        clearPotate(index)
    }
}

clearPotate(potate)


function test(x) {
    if (x === 1) {
        return 1
    } else {
        return x * test(x - 1)
    }
}


console.log(test(4))

*/