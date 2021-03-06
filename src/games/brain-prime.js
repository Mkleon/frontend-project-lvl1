import { random } from 'lodash';
import { joinQuestionAndAnswer } from '../library';
import gameEngine from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
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
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return joinQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
