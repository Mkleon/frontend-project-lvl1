import { findOutUserName, showToUser, getUserAnswer } from './library';

const game = (description, params = null) => {
  const numberOfRounds = 3;

  showToUser('Welcome to the Brain Games!');
  showToUser(description);

  const userName = findOutUserName();
  showToUser(`Hello, ${userName}!\n`);

  const play = (round) => {
    if (round === 0) {
      showToUser(`Congratulations, ${userName}!`);
      return false;
    }

    const data = params();
    const question = data('question');
    const correctAnswer = data('answer');

    showToUser(`Question: ${question}`);

    const answer = getUserAnswer('Your answer: ');

    if (correctAnswer !== answer) {
      showToUser(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }

    showToUser('Correct!');

    return play(round - 1, userName);
  };

  // This condition is for the case when run 'brain-games' only.
  if (params !== null) {
    play(numberOfRounds);
  }
};

export default game;
