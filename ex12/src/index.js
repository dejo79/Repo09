function switchCaseSequential(num) {
    var answer = "";
    switch (num) {
        case 1:
        case 2:
        case 3:
            result = "Low";
        break;
        case 4:
        case 5:
        case 6:
            result = "Mid";
        break;
        case 7:
        case 8:
        case 9:
            result = "High";
        switchCaseSequential(1);
    }
    return answer;
}
console.log(switchCaseSequential(1));
module.exports = switchCaseSequential;