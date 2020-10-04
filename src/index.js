
exports.min = function min (array) {
    if (!array || !array.length) return 0;
    return array.reduce((acc, num) => {
        return num < acc ? num : acc
    }, Infinity)
}

exports.max = function max (array) {
    if (!array || !array.length) return 0;
    return array.reduce((acc, num) => {
        return num > acc ? num : acc
    }, -Infinity)
}

exports.avg = function avg (array) {
    if (!array || !array.length) return 0;
    return array.reduce((acc, num) => {
        return acc + num
    }, 0) / array.length
}
