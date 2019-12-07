import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './library';

const numberOfRounds = 3;

const gameEngine = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const play = (round) => {
    if (round === numberOfRounds) {
      return true;
    }

    const questionAndAnswer = generateQuestionAndAnswer();
    const question = getQuestion(questionAndAnswer);
    const correctAnswer = getAnswer(questionAndAnswer);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    console.log('Correct!');

    return play(round + 1);
  };

  if (play(0)) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default gameEngine;
