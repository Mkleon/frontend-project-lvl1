import { random } from 'lodash';
import { saveQuestionAndAnswer } from '../library';
import gameEngine from '../index';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateQuestionAndAnswer = () => {
  const question = random(-99, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
