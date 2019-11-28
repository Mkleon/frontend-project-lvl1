import readlineSync from 'readline-sync';
import { random } from 'lodash';

export const getUserAnswer = (question) => readlineSync.question(question);

export const findOutUserName = () => getUserAnswer('May I have your name? ');

export const showToUser = (message) => console.log(message);

export const getRandomNumber = (lowerBound = -9, upperBound = 9) => random(lowerBound, upperBound);
