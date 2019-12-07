import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;

export const saveQuestionAndAnswer = (question, correctAnswer) => cons(question, correctAnswer);

export const getQuestion = (questionAndAnswer) => car(questionAndAnswer);

export const getAnswer = (questionAndAnswer) => cdr(questionAndAnswer);

const checkUserAnswer = (userAnswer, correctAnswer) => (correctAnswer === userAnswer);


export const gameEngine = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const play = (round) => {
    if (round === numberOfRounds) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const questionAndAnswer = generateQuestionAndAnswer();
    const question = getQuestion(questionAndAnswer);
    const correctAnswer = getAnswer(questionAndAnswer);

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
