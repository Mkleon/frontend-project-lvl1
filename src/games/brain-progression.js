import { random } from 'lodash';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'What number is missing in the progression?';

const getArithmeticProgression = (firstItemValue, difference, indexOfHiddenItem) => {
  let result = '';
  let currentValue = firstItemValue;

  for (let i = 0; i <= 9; i += 1) {
    currentValue += difference;

    if (i !== indexOfHiddenItem) {
      result = `${result} ${currentValue}`;
    } else {
      result = `${result} ..`;
    }
  }

  return result;
};

const generateQuestionAndAnswer = () => {
  const difference = random(1, 10);
  const firstItemValue = random(1, 99);
  const indexOfHiddenItem = random(0, 9);
  const hiddenItemValue = firstItemValue + ((indexOfHiddenItem + 1) * difference);

  const question = getArithmeticProgression(firstItemValue, difference, indexOfHiddenItem);
  const correctAnswer = (String)(hiddenItemValue);

  return saveQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
