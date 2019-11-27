import _ from 'lodash';
import game from '../index';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

  const params = () => {
    const number = _.random(-99, 99);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    return (message) => {
      switch (message) {
        case 'question':
          return number;
        case 'answer':
          return correctAnswer;
        default: return 'Unknown message';
      }
    };
  };

  game(description, params);
};
