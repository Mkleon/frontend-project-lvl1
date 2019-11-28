import { getRandomNumber } from '../library';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'Find the greatest common divisor of given numbers.\n';

const generateQuestionAndAnswer = () => {


  const question = getRandomNumber(-99, 99);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
