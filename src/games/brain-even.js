import { getRandomNumber, gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (number) => (number % 2 === 0);

const generateQuestionAndAnswer = () => {
  const question = getRandomNumber(-99, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
