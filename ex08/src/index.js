function logicalOrOperator(num) {
    if (num < 20 || num > 30) {
        return "Out";
    }
        return "In";
    
}
logicalOrOperator(20);
console.log(logicalOrOperator());
module.exports = logicalOrOperator;