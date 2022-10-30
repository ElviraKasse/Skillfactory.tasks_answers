function sum(x) {
    return function (y) {  // возвращаем функцию
        return x + y;      // возращает сумму двух чисел
    };
}

let f = sum(4);
console.log(f(0), f(1), f(2));

console.log(sum(1)(2), sum(2)(2), sum(25)(3));