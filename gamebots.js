'use strict'

const gameBotFunction = function () {


    function randomGenerate(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(rand)
    }






    let mysteryNumber = randomGenerate(1, 100)
    console.log('Случайно выбранное число: ', mysteryNumber)
    let answerNum = ''
    let tries = 10


    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    }



    return function getResult() {

        // начало тела рекурсивной функции

        answerNum = prompt('Угадайте число от 0 до 100') // задаем вопрос
        console.log(answerNum) // выведем в консоль для понимания, какие цифры вводятся

        // если ничего не указать или нажать отмена, вернется 0


        if (answerNum === null) {
            alert('Вы отказались играть')
            return
        }



        while (!isNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ввели строку:')
            answerNum = prompt('Угадайте число от 0 до 100') // задаем вопрос
            console.log(answerNum) // выведем в консоль для понимания, какие цифры вводятся

        }

        answerNum = Number(answerNum)





        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше: ' + 'Осталось попыток: ' + tries) // после первого отработанного условия идем дальше
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше:  ' + 'Осталось попыток: ' + tries)
        } else if (mysteryNumber === answerNum) {
            const isUserWantNewGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') // угадал! закончить игру!
            if (isUserWantNewGame) {
                tries = 10
                mysteryNumber = randomGenerate(1, 100)
                console.log('Случайно выбранное число: ', mysteryNumber)
            } else {
                tries = 0
            }
        }






        if (tries > 0) {
            tries--
            // если попытки еще есть, тогды выполнить функцию
            getResult();
        } else {
            const maybeAgain = confirm('Попыток больше нет, игра окончена. Хотите начать заново?')
            if (maybeAgain) {
                tries = 2
                getResult();
            } else {
                console.log('Пользователь завершил игру')
                return
            }

        }





        // конец тела рекурсивной функции
    }


}



let launchGameBot = gameBotFunction();
launchGameBot();



