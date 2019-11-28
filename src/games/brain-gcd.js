import { getRandomNumber } from '../library';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'Find the greatest common divisor of given numbers.\n';

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
  const number1 = getRandomNumber(1, 99);
  const number2 = getRandomNumber(1, 99);

  const question = `${number1} ${number2} (hint: ${getGreatestCommonDivisor(number1, number2)})`;
  const correctAnswer = (String)(getGreatestCommonDivisor(number1, number2));

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
