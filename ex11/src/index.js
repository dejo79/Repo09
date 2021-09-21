function switchCase(letter) {
    var animals;
    switch (letter) {
        case "a": "antelope";
        break;
        case "b": "bird";
        break;
        case "c": "cat";
        break;
        default: "stuff";
        break;
    }
    return animals;
}
console.log(switchCase(letter));
module.exports = switchCase;