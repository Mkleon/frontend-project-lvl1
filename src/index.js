import readlineSync from 'readline-sync';
import _ from 'lodash';

const showToUser = (text) => console.log(text);

const getUserAnswer = (question) => readlineSync.question(question);

const greetingUser = (name) => showToUser(`Hello, ${name}!`);

const findOutUserName = () => getUserAnswer('May I have your name? ');

const showDescriptionGame = (description) => showToUser(description);


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

  const play = (count) => {
    if (count === 0) {
      showToUser(`Congratulations, ${name}!`);
      return false;
    }

    const number = _.random(-99, 99, false);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    showToUser(`Question: ${number}`);

    const answer = getUserAnswer('Your answer: ');

    if (correctAnswer !== answer) {
      showToUser(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return false;
    }

    showToUser('Correct!');

    return play(count - 1);
  };

  play(3);
};
