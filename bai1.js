function findOppositeNumber(n, inputNumber) {

    if (inputNumber == 5) {
        return 0;
    }
    if (inputNumber > 5) {
        return inputNumber - n / 2;
    }
    if (inputNumber < 5) {
        return inputNumber + n / 2;
    }
}
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));