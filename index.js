function returnFirstTwoDrivers(array) {
    return array.slice(0,2);
}

function returnLastTwoDrivers(array) {
    return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(multiplier) {
        return multiplier * integer;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, fn) {
    return fn(array);
    }
