import _ from 'lodash';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'What is the result of the expression?\n';

const generateRandomSign = () => {
  switch (_.random(2)) {
    case 0:
      return '-';
    case 1:
      return '+';
    case 2:
      return '*';
    default:
      return '+';
  }
};

const getResult = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return (String)(num1 + num2);
    case '-':
      return (String)(num1 - num2);
    case '*':
      return (String)(num1 * num2);
    default: return 'Unknown sing';
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = _.random(0, 9);
  const number2 = _.random(0, 9);
  const sign = generateRandomSign();

  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = getResult(number1, number2, sign);

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
