import { findOutUserName, showToUser } from './library';
import { description, play } from './games/brain-even';

const numberOfRounds = 3;

export default () => {
  const welcome = 'Welcome to the Brain Games!';
  showToUser(welcome);

  showToUser(description);

  const userName = findOutUserName();
  showToUser(`Hello, ${userName}!`);

  play(numberOfRounds, userName);
};
