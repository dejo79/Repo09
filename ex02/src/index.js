function myFunction(myParameter) {
    if(myParameter) {
        return "true";
        console.log("The parameter is true!");
    }
        return "false";
        console.log("The parameter is false!");
}
myFunction(true);
myFunction(false);
module.exports = myFunction;