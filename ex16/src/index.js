function checkSign(num) {
    return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}
checkSign(0);
console.log(checkSign());
module.exports = checkSign;