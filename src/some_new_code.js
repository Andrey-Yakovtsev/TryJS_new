// console.log('Hello World');
//
// // ['Учим', 'JS', 'Whatever'].forEach(alert);
//
// let number = -55;
// console.log(number / 0);
//
// let number2 = 45
// console.log(number + number2);
//
// // let list = Array(number2, number)
// // console.log(list)
//
// function newfunc() {
//     console.log(number);
//     console.log(number2)
// }
// newfunc();
//
// // let myLifeStyle
//
// // myLifeStyle = 'my life style'
//
// // myLifeStyle = 46
//
// // console.log(myLifeStyle) //Undefined
//
// const userProfile = {
//     name: 'Имя объекта',
//     age: 30,
//     job: 'Работа какая-то'
// }
//
// userProfile.age = 20
//
// console.log(userProfile) //Тип данных

// console.log(typeof(myLifeStyle)) //Undefined
//
// let myLifeStyle = null
//
// console.log(typeof(userProfile.age/'0'))
//
//
// let getNan = 'string' / 10
// console.log(getNan)
//
//
// let taysonAge = `Возраст Таи ${7} лет`;
// console.log(taysonAge)
// console.log(typeof taysonAge)
//
// taysonAge = String(taysonAge);
// console.log(taysonAge)
// console.log(typeof taysonAge)
//
// let hundred = 20**5
// console.log(hundred)
//
// let someShit = 5  + '2'
// console.log(someShit)
//
//
// someShit = + someShit
// console.log(someShit)
//
// let incre = 2
// incre++;
// console.log(incre)
// incre--;
// console.log(incre > 3, incre<3, incre <=2)
//
// console.log('007' == 7)
// console.log('007' && 7)
// console.log('007' || 7)
//
// let message = 'Hello, Bro!'
//
// // IF ELSE
//
// if ( 2 > 5) {
//     console.log(message)
// } else {
//     console.log('Not TRUE')
// };
//
// if (5>2) console.log('Trully True');
//
// let number = 8;
//
// if (number > 10) {
//     console.log('Done')
// } else if (number < 6) {
//     console.log('Number < 6')
// } else if (number > 7) {
//     console.log('Number > 7')
// }
//
//
// // аналог ИФ ЭЛСЕ
// let messageStart = 'Привет';
// let messageEnd = (5>10) ? ', Вася' : ', Оля';
// console.log(messageStart + messageEnd)
// // можно и без скобок
// let messageEnd2 = 15>10 ? ', Вася' : ', Оля';
// console.log(messageStart + messageEnd2)
//
// // или даже так:
//
// messageEnd3 = number > 10 ? ', Вася' :
//     number < 6 ? ', Olya':
//         number > 7 ? ', Misha': ', Kesha'
// console.log(messageStart + messageEnd3)


// let num = 5
// while (num) {
//     console.log(num)
//     num--;
// }
// do {
//     console.log(num);
//     num--;
// } while (num)


// let number = 10;
// for (; number < 15;) {
//     console.log(number)
//     number++
//     if (number == 13) break;
// }
//
// firstFor: for (let num = 0; num < 2; num++) {
// 	for (let size = 0; size < 3; size++) {
// 	    console.log(`Num === ${num}`)
//         console.log(`Сайз == ${size}`)
// 		if (size == 2) {
// 		    console.log(`Gопали на size== ${size}`)
// 			continue firstFor;
// 		}
// 		console.log(size);
// 	}
// }

function getMessage(number) {
    for ( number; number <= 3; number++)
    console.log(`This is a message ${number}`)
}

getMessage(1)

let getMessage2 = (param1, param2) => `${param1} ${param2}!`;

console.log(
getMessage2('какой-то', 'текст')
)