


let age = 10
const sweetRun = setTimeout(function() { 
  if(age === 20) { 
clearInterval(interval) 
 } else {
 console.log(++ age)
 }
},50)















//let sweetRun = 0
//const interval =  setTimeout( function() { // setTimeout задаёт задержку и цифры дальше не идёт. Высвечивается только 1. 
//clearInterval аналогично -  setTimeout. 

// setInterval( function() {} - Использую для передачи Функции, где вижу, что нет никакого Названия: }, 10). // }, 10) - Коллличество Мили - секунд. setIntarval возвращает новый Interval и при помощи if(sweetRun === 5{ - Я его Отчищаю! 

// При помощи Метода setIntarval и при помощи (++counter) я получаю в Консоли 1 вместо 0 и с цифра 1 начинает переходить на 2, 3 и так до 1000


// let conSwer = 0
// const interval = setInterval( function () {
// if(conSwer === 20) {
//clearInterval(interval)
// }else{
// console.log(++conSwer)
// }
// }, 100)


// 3.) Стрелочные функции



//const firstName = 'Я Тебя Люблю'

//function greetLoge (name) {
//console.log('Привет - ', name)
//}

//const arrow = (name) => { // => (переход в стрелочную функцию и её название). В таких фигурных скобках {} - описываю какую - то Логику
//console.log('Привет - ', name)
//}

//const arrow2 = name => { console.log(`Привет Мариночка -  ${firstName}`) // По бокам от name могу не ставить скобки, так как они уже были выше! Хех
//}
//arrow ('Daniil')
//arrow2 ('Marinochka')


//const pow2 = num => {
 //return num ** 2 // ** - через звёздочки тоже могу возводить в Степень, а не только при pow!   
//}

//console.log( pow2(5))



//const sqwrt2 = num => num ** 2 // Сокращённая Версия!
//console.log( sqwrt2(5))

 

// 4.) Параметры по Умолчания 



//const sum = (a, b = 1) => a + b // Через Знак Равно я b делаю по умолчанию

//console.log( sum(41, 4 )) // если в скобках использовать 1 число, то ответ будет NaN. Через умолчание всё будет работать - даже без одного числа в скобках - console.log( sum(41,))
// Если я добавлю 2 число в скобки, то умолчание уже не работает


// const sum = (a = 40, b = a * 2) => a + b

//console.log( sum(41, 4 ))
// console.log( sum( )) // Получаю ответ - 120. a * 2 = 80; после скобок 2 по счёту действие уже идёт: 40 + 80 = 120! В console.log( sum( )) ничего не указано и поэтому считается всё в верхней части. Если бы в нижней были бы известны числа, то Умолчание изчесло б и Считалось бы всё Именно в Нижних Скобках!

// function sumAll (...all) { // ...all - Специальный Оператор: Rest! Он обозначается, как 3 Точки, котрорый берёт и собирает в all Собирает Указанные Мной Числа!   
// }

// function sumAll(...all) { // На самом деле Массив, котрый берёт и Неограничееное колличество элементов собирает в Массив! 
// let result = 0
// for(let num of all) {  // Num - число.  Беру Num, тоесть число из Массива - all и к результату уже прибавляю следующее число!!!! Насколько я понял. Хех 
// result += num
// }
// return result
// }
// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res)


//function carCar (...all) {
//let result = 0
//for(let num of all) { 
//result += num
 //}
 //return result
//}

//const res = carCar(1, 2, 3, 4, 5, 6, 7 ,8)
//console.log(res)




//function farCray (...all) {
//let result = 0 
//for (let nul of all) {
//result += nul
//}
//return result
//}

//const res =  farCray (1, 2, 3, 4, 5)
//console.log(res)





