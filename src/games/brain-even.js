import _ from 'lodash';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const savedQuestionAndAnswer = () => {
  const question = _.random(-99, 99);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, savedQuestionAndAnswer);
};
