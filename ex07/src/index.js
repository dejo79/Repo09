function logicalAndOperator(num) {
    if (num >= 40 && num <= 80) {
        return "Yes";
    }
    return "No";
}
logicalAndOperator(0);
console.log(logicalAndOperator());
module.exports = logicalAndOperator;