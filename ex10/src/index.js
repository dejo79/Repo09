function logicOrder(num) {
    if (num < 50) {
        return "Less than 50";
    } else if 
        (num < 100) {
        return "Less than 100";
    } else {
        return "Greater than or equal to 100";
    }
}
logicOrder(110);
console.log(logicOrder());
module.exports = logicOrder;