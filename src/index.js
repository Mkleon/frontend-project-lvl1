import readlineSync from 'readline-sync';
import { _ } from 'lodash';

const printToScreen = (text) => console.log(text);

const getUserAnswer = (question) => readlineSync.question(question);

const greetingUser = (name) => printToScreen(`Hello, ${name}!`);

const findOutUserName = () => getUserAnswer('May I have your name? ');

const showDescriptionGame = (description) => printToScreen(description);

export const startBrainGames = () => {
  const description = 'Welcome to the Brain Games!\n';
  showDescriptionGame(description);

  const name = findOutUserName();
  greetingUser(name);
};

export const startBrainEven = () => {
  const description = 'Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n';
  showDescriptionGame(description);

  const name = findOutUserName();
  greetingUser(name);

  const positiveAnswer = 'yes';
  const negativeAnswer = 'no';
  let message = 'Correct!';

  for (let i = 0; i < 3; i += 1) {
    const number = _.random(-99, 99, false);
    const correctAnswer = (number % 2 === 0) ? positiveAnswer : negativeAnswer;

    printToScreen(`Question: ${number}`);

    const answer = getUserAnswer('Your answer: ');

    if (positiveAnswer !== answer || negativeAnswer !== answer || correctAnswer !== answer) {
      message = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`;

      printToScreen(message);

      break;
    }

    printToScreen(message);
  }
};
