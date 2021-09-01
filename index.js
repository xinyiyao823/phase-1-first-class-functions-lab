// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => drivers.slice(0,2);
    
const returnLastTwoDrivers = () => drivers.slice(2,4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num) {
    const multiplier = (num) => num * num;
        return multiplier;
    
        
}
function fareDoubler(multiplier) {
    const doubler = multiplier * 2;
    return doubler;
}

function fareTripler(doubler) {
    const tripler = doubler * 3;
    return tripler;
}


function selectDifferentDrivers(drivers, firstDrivers) {
    return firstDrivers(drivers);
    
}

