// Code your solution here



//answer 1

function findMatching(array, str){
    const driverMatch = array.filter(driver => driver.toLowerCase() === str.toLowerCase())
    return driverMatch
}

function fuzzyMatch(array, str){
 const driverMatch = array.filter(driver => driver.slice(0, str.length) === str);
 return driverMatch;
}

function matchName(array, str){
    const driverMatch = array.filter(driver => driver.name === str)
    return driverMatch
}