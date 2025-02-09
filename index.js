const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return function (fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrOfNames, returnedDrivers) => {
  return returnedDrivers(arrOfNames);
};
