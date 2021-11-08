/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    const aString = a.toString();
    const bString = b.toString();
    const sum = a + b;
    const sumString = sum.toString();
    return aString + ' + ' + bString + ' = ' + sumString;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const arrLength = (endNumber - startNumber) + 1;
    let array = [];
    let addedNum = startNumber;
    for (let i = 0; i < endNumber; i++){
        array[i] = addedNum;
        addedNum = addedNum + 1;
    }
    return array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    const arrLength = numbers.length();

    for ( let i = 0; i < arrLength; i++){
        if(numbers[i] < min){
            min = numbers[i];
        } else if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    const minString = "min: " + min;
    const maxString = "max: " + max;

    let retArr = [minString, maxString]
    return retArr;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let itemized = []

    for(let i = 0; i < array.length(); i++){
        let current = array[i];
        let counter = 0;
        for (let j = 0; j < array.length(); j++){
            if(array[j] == current){
                counter++;
            }
        }
        itemized.push(current +':' + counter);
    }

    return itemized;
}
