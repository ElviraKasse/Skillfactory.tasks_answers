let arrN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, null, 'a', 'v'];

function countEven_or_Odd(arr) {
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 0) || (typeof (arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }
    return [countEven, countOdd, countOther];
}

let rez = countEven_or_Odd(arrN);

console.log("Even is " + rez[0]);
console.log("Odd is " + rez[1]);
console.log("Other is " + rez[2]);
