function printNumbers(from, to) {  // функция для печати чисел, начиная от from до to
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);  // задержка 1 секунда
}

// использовать числа:
printNumbers(3, 10);