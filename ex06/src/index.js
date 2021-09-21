function comparisonToEqual(a) {
    if (a <= 0) {
        return "Less than 5"; }
        if (a <= 5) {
            return "Less than 10"; }
            if (a > 17) {
                return "10 or over"; }
                if (a >= 21) {
                    return "More than 20"; }
}
comparisonToEqual(a);
module.exports = comparisonToEqual;