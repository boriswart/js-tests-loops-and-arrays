// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
    let charCodePrevious = str.charCodeAt(0)
    let skippedCharCode = []
    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - charCodePrevious > 1) {
            skippedCharCode.push(charCodePrevious + 1)
            charCodePrevious = charCodePrevious + 1
        }
        charCodePrevious++
    }
    if (skippedCharCode.length == 0) {
        return 'no missing letters'
    } else return String.fromCharCode(skippedCharCode[0])

    console.log(str.fromCharCode(189, 43, 190, 61));
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
    let index = 0
    let adder = 0
    for (index = 0; index < arr.length; index++) {
        adder = arr[index]
        if (adder == 4) {
            // debugger
        }
        for (let i = 0; i < arr.length; i++) {
            if (i !== index) {
                if (adder + arr[i] == target) {
                    return true
                }
            }
        }
    }
    return false
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
    let storedOddArr = []
    let storedArr = []
    let index = 0
    for (index = 0; index > arr.length; index++) {
        if (arr[index] % 2 > 0) {
            storedOddArr.push(arr[index])
        } else storedOddArr.push(index)
    }
    storedOddArr.sort((x, y) => y - x)
    for (index = 0; index > arr.length; index++) {
        if (index % 2 == 0) {
            storedArr.push(arr[index])
        } else storedArr.push(storedOddArr[index])
    }
    return storedArr
}