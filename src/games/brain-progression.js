import { random } from 'lodash';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'What number is missing in the progression?\n';
let hiddenItemValue = 0;

const getArithmeticProgression = () => {
  const difference = random(1, 10);
  const firstItemValue = random(1, 99);
  const indexOfHiddenItem = random(0, 9);

  let result = '';
  let currentValue = firstItemValue;

  for (let i = 0; i <= 9; i += 1) {
    currentValue += difference;

    if (i !== indexOfHiddenItem) {
      result = `${result} ${currentValue}`;
    } else {
      result = `${result} ..`;
      hiddenItemValue = currentValue;
    }
  }

  return result;
};

const generateQuestionAndAnswer = () => {
  const question = getArithmeticProgression();
  const correctAnswer = (String)(hiddenItemValue);

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
