module.exports = function reverse (n) {
    let number = Math.abs(n)
    number = number.toString().split('').reverse().join('');
    return number;
}
