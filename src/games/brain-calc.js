import game from '../index';

export default () => {
  const description = 'What is the result of the expression?\n';

  const question = () => 1;

  const correctAnswer = (item) => item;

  game(description, question, correctAnswer);
};
