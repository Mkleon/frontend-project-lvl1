import { findOutUserName, showToUser, getUserAnswer } from './library';

const game = (description, question = null, correctAnswer = null) => {
  const numberOfRounds = 3;

  showToUser('Welcome to the Brain Games!');
  showToUser(description);

  const userName = findOutUserName();
  showToUser(`Hello, ${userName}!\n`);

  const play = (round = numberOfRounds) => {
    if (round === 0) {
      showToUser(`Congratulations, ${userName}!`);
      return false;
    }

    const questionCurrent = question();
    const correctAnswerCurrent = correctAnswer(questionCurrent);

    showToUser(`Question: ${questionCurrent}`);

    const answer = getUserAnswer('Your answer: ');

    if (correctAnswerCurrent !== answer) {
      showToUser(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswerCurrent}'.\nLet's try again, ${userName}!`);
      return false;
    }

    showToUser('Correct!');

    return play(round - 1, userName);
  };

  // This condition is for the case when run 'brain-games' only.
  if (question !== null && correctAnswer !== null) {
    play(numberOfRounds);
  }
};

export default game;
