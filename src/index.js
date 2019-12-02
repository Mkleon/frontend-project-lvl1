import readlineSync from 'readline-sync';
import { random } from 'lodash';

const numberOfRounds = 3;

export const getRandomNumber = (lowerBound = -9, upperBound = 9) => random(lowerBound, upperBound);

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
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const play = (round) => {
    if (round === numberOfRounds) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const questionAndAnswer = generateQuestionAndAnswer();
    const question = questionAndAnswer('question');
    const correctAnswer = questionAndAnswer('answer');

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (!checkUserAnswer(answer, correctAnswer)) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');

    return play(round + 1, userName);
  };

  play(0);
};
