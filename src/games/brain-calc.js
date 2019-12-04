import { random } from 'lodash';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'What is the result of the expression?\n';

const generateRandomSign = () => {
  switch (random(0, 2)) {
    case 0:
      return '-';
    case 1:
      return '+';
    case 2:
      return '*';
    default:
      return false;
  }
};

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
  const sign = generateRandomSign();

  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = (String)(getResult(number1, number2, sign));

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
