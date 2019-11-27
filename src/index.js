import { findOutUserName, showToUser, getUserAnswer } from './library';

const numberOfRounds = 3;

export const saveQuestionAndAnswer = (question, correctAnswer) => (message) => {
  switch (message) {
    case 'question':
      return question;
    case 'answer':
      return correctAnswer;
    default: return 'Unknown message';
  }
};

export const gameEngine = (description, generateQuestionAndAnswer) => {
  showToUser('Welcome to the Brain Games!');
  showToUser(description);

  const userName = findOutUserName();
  showToUser(`Hello, ${userName}!\n`);

  const play = (round) => {
    if (round === numberOfRounds) {
      showToUser(`Congratulations, ${userName}!`);
      return false;
    }

    const questionAndAnswer = generateQuestionAndAnswer();
    const question = questionAndAnswer('question');
    const correctAnswer = questionAndAnswer('answer');

    showToUser(`Question: ${question}`);

    const answer = getUserAnswer('Your answer: ');

    if (correctAnswer !== answer) {
      showToUser(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }

    showToUser('Correct!');

    return play(round + 1, userName);
  };

  play(0);
};
