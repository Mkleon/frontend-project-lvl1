import _ from 'lodash';
import game from '../index';

export default () => {
  const description = 'What is the result of the expression?\n';

  const params = () => {
    const getSign = () => {
      switch (_.random(2)) {
        case 0:
          return '-';
        case 1:
          return '+';
        case 2:
          return '*';
        default:
          return '+';
      }
    };

    const number1 = _.random(0, 9);
    const number2 = _.random(0, 9);
    const sign = getSign();

    return (message) => {
      switch (message) {
        case 'question':
          return `${number1} ${sign} ${number2}`;
        case 'answer':
          switch (sign) {
            case '+':
              return (String)(number1 + number2);
            case '-':
              return (String)(number1 - number2);
            case '*':
              return (String)(number1 * number2);
            default: return 'Unknown sing';
          }
        default: return 'Unknown message';
      }
    };
  };

  game(description, params);
};
