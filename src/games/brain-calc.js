import { showToUser } from '../library';

export const description = 'What is the result of the expression?\n';

export const play = (numberOfRounds, userName) => {
  showToUser(description);
  showToUser(userName);
};
