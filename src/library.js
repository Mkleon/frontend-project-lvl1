import { random } from 'lodash';

export const showToUser = (message) => console.log(message);

export const getRandomNumber = (lowerBound = -9, upperBound = 9) => random(lowerBound, upperBound);
