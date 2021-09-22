function myDoWhile() {
    var myNumbers = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
    do {
        console.log(myNumbers);
        myNumbers++;
    } while (myNumbers < 10);
}
myDoWhile();
module.exports = myDoWhile;