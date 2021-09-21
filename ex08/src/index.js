function logicalOrOperator(num) {
    if (num > 30 || num < 20) {
        return "Out";
    }
    return "In";
}
logicalOrOperator(num);
module.exports = logicalOrOperator;