// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
    let firstElement = arr[0]
    let first = true
    var storedArr = []
    arr.forEach(x => {
        if (!first) {
            storedArr.push(x)
        }
        first = false
    })
    storedArr.push(firstElement)
    console.log(storedArr)
    return storedArr
}


// ------------------------------------------


// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
    let largestNum = -99
    arr.forEach(x => {
        if (x > largestNum) {
            largestNum = x
        }
    })
    return largestNum
}


// ------------------------------------------


// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
    console.log(arr)
    let storedArr = []
    let len = arr.length
    arr.forEach(x => {
        storedArr.push(x * len)
    })
    console.log(storedArr)
    return storedArr
}
// ------------------------------------------



//4. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
    from: 'BOI',
    to: 'LAX',
    prices: {
        standard: 500,
        firstClass: 2200
    }
}, {
    from: 'BOI',
    to: 'SEA',
    prices: {
        standard: 800,
        firstClass: 1200
    }
}, {
    from: 'BOI',
    to: 'CAN',
    prices: {
        standard: 750,
        firstClass: 6200
    }
}]


function flightCost(destination, firstClass) {
    //***hint: use the find method***
    console.log(flights.find(x => x.to == destination.toUpperCase()).prices.standard)
    if (!firstClass) {
        return flights.find(x => x.to == destination.toUpperCase()).prices.standard
    }
    return flights.find(x => x.to == destination).prices.firstClass
}


// ------------------------------------------


// 5. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." } 


let staff = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' },
{ id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' },
{ id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

function findById(id) {
    // console.log(`{id: ${id}, name: '${staff.find(x => x.id == id).name}' }`)
    if (staff.find(x => x.id == id)) {
        return staff.find(x => x.id == id)
    } else return { error: "No user with that id." }
    console.log(`{ error:  "No user with that id." }`)
}
// ------------------------------------------


// 6. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
    homeCity: "Birmingham",
    members: [{
        name: 'Johnny P',
        instrument: 'sax'
    }, {
        name: 'River',
        instrument: 'drums'
    }, {
        name: 'Kris',
        instrument: 'guitar'
    }]
}

function bandMemberDetails(name) {
    let bandObject = theBand.members.find(x => x.name == name)
    console.log(`${bandObject}is in the band and plays the snoodle`)
    return `${bandObject.name} is in the band and plays the ${bandObject.instrument}`
}
