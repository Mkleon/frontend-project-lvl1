import { random } from 'lodash';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  const limit = Math.floor(number / 2);

  for (let i = 2; i < limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const question = random(2, 99);
  const correctAnswer = (isPrimeNumber(question)) ? 'yes' : 'no';

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
