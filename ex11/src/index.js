function switchCase(letter) {
    var animals = "";
    switch(letter) {
        case "a": animals = "antelope"
        break;
        case "b": animals = "bird"
        break;
        case "c": animals = "cat"
        break;
        default : animals = "stuff"
        break;
        switchCase("4");
    }
    return animals;
}

console.log(switchCase("4"));
module.exports = switchCase;