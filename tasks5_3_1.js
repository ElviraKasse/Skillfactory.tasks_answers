let val = prompt("Пожалуйcта, введите значение ")

let value = +val;

if (typeof value == "number" && !isNaN(value)) {

    if (value % 2 == 0) {

        console.log("Это четное число");
    } else {

        console.log("Это нечетное число");
    }

} else {

    console.log("Упс, кажется, вы ошиблись");

}
