import readlineSync from 'readline-sync';
import { showToUser } from './library';

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

const checkUserAnswer = (userAnswer, correctAnswer) => (correctAnswer === userAnswer);

export const gameEngine = (description, generateQuestionAndAnswer) => {
  showToUser('Welcome to the Brain Games!');
  showToUser(description);

  const userName = readlineSync.question('May I have your name? ');
  showToUser(`Hello, ${userName}!\n`);

  const play = (round) => {
    if (round === numberOfRounds) {
      return showToUser(`Congratulations, ${userName}!`);
    }

    const questionAndAnswer = generateQuestionAndAnswer();
    const question = questionAndAnswer('question');
    const correctAnswer = questionAndAnswer('answer');

    showToUser(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (!checkUserAnswer(answer, correctAnswer)) {
      return showToUser(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }

    showToUser('Correct!');

    return play(round + 1, userName);
  };

  play(0);
};
