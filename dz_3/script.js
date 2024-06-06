// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
//
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
//
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
//     - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
//
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
//
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст,
// который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке,
// то ничего выводить не нужно. Необходимо использовать делегирование.
//
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания,
// если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
//
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

//Задание 1

document.addEventListener('DOMContentLoaded', function(){
    console.log("все теги прогрузились")
})

//Задание 2

document.addEventListener('load', function(){
    console.log("страница загрузилась")
})

//Задание 3

document.addEventListener('click', function(e){
    const target = e.target
    const element = target.tagName.toLowerCase()
    const hasClass = target.classList.contains('super_element')

    if (hasClass) {
        console.log(`Класс "super_element" присутствует в элементе "${element}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${element}".`);
    }
})

//Задание 4
const textArea = document.querySelector('textArea')
textArea.addEventListener('mouseover', function(e) {
    const target = e.target
    const element = target.tagName.toLowerCase()
    console.log(`Вы навели на ${element} `)
})

//Задание 5

const ulContainer = document.querySelector('ul')

ulContainer.addEventListener('click', function(e){

    if(e.target.tagName.toLowerCase() === 'button'){
        console.log(e.target.textContent)
    }
})

//Задание 6
// В данном случае текст из 5 задания выводится первым, потому что обработчик события на кнопке срабатывает первым,
// а затем событие всплывает до элемента <ul>, где срабатывает обработчик события, связанный с текстом из 3 задания.

// Задание 7
const liAllContainer = document.querySelectorAll('li')

liAllContainer.forEach((item, index) => {
    if((index + 1) % 2 === 0){
        item.style.background = 'lightblue'
    }
})
