import { random } from 'lodash';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'What is the result of the expression?\n';

const getResult = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = random(0, 9);
  const number2 = random(0, 9);
  const listOfSigns = '+-*';
  const randomSign = listOfSigns[random(0, listOfSigns.length - 1)];

  const question = `${number1} ${randomSign} ${number2}`;
  const correctAnswer = (String)(getResult(number1, number2, randomSign));

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
