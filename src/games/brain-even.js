import _ from 'lodash';
import { getUserAnswer, showToUser } from '../library';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export const play = (numberOfRounds, userName) => {
  if (numberOfRounds === 0) {
    showToUser(`Congratulations, ${userName}!`);
    return false;
  }

  const number = _.random(-99, 99, false);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

  showToUser(`Question: ${number}`);

  const answer = getUserAnswer('Your answer: ');

  if (correctAnswer !== answer) {
    showToUser(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return false;
  }

  showToUser('Correct!');

  return play(numberOfRounds - 1, userName);
};
