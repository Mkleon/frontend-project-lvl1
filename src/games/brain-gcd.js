import { random } from 'lodash';
import { joinQuestionAndAnswer } from '../library';
import gameEngine from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  const maxDivisor = (num1 < num2) ? num1 : num2;

  for (let i = maxDivisor; i > 0; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }

  return 1;
};

const generateQuestionAndAnswer = () => {
  const number1 = random(1, 99);
  const number2 = random(1, 99);

  const question = `${number1} ${number2}`;
  const correctAnswer = (String)(getGreatestCommonDivisor(number1, number2));

  return joinQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
