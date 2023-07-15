// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch(drivers, firstLetters){
    return drivers.filter((driver) => driver.toLowerCase().indexOf(firstLetters.toLowerCase()) === 0)
    //indexOf() method returns the first index at which a given element can be found in an array or -1 if not present
    //the second argument passed to indexOf() represents the start from index
}

function matchName(driversObj, stringName){
    return driversObj.filter(driver => driver.name === stringName)
}