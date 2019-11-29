import { getRandomNumber } from '../library';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrimeNumber = (number) => {
  if (number === 2) {
    return true;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 99);
  const correctAnswer = (isPrimeNumber(question)) ? 'yes' : 'no';

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
