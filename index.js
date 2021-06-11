// Add your functions here
function map(arr, callback) {
    let newArray = arr.map(a => {
        return callback(a)
    })
    return newArray
}

function reduce(arr, callback, startingValue) {
    let total

    if (startingValue) {
        total = startingValue
        for (let i = 0; i < arr.length; i++) {
            total = callback(arr[i], total)
        }
        return total
    } else {
        total = arr[0]
        for (let i = 1; i < arr.length; i++) {
            total = callback(arr[i], total)
        }
        return total
    }
}