import { getRandomNumber } from '../library';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(-99, 99);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
