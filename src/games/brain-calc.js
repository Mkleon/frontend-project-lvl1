import _ from 'lodash';
import game from '../index';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

  const question = (low = -99, high = 99) => _.random(low, high);

  const correctAnswer = (item) => {
    if (item % 2 === 0) {
      return 'yes';
    }

    return 'no';
  };

  game(description, question, correctAnswer);
};