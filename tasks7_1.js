Задание 7_1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

    let auto = {
    brand: 'Audi',
    cpu: 'q7',
    price: 14000000
}
function printObj(obj) {
    for (let key in obj) {   /* для перебора ключей в обьекте используем оператор for..in */
        console.log(`${key}: ${obj[key]}`);
    }
}
printObj(auto)