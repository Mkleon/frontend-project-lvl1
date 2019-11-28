import { getRandomNumber } from '../library';
import { gameEngine, saveQuestionAndAnswer } from '../index';

const gameDescription = 'What number is missing in the progression?\n';
let hiddenItemValue = 0;

const getArithmeticProgression = () => {
  const difference = getRandomNumber(1, 10);
  const firstItemValue = getRandomNumber(1, 99);
  const indexOfHiddenItem = getRandomNumber(0, 9);

  let result = '';
  let currentValue = firstItemValue;

  for (let i = 0; i <= 9; i += 1) {
    currentValue += difference;

    if (i !== indexOfHiddenItem) {
      result += ` ${currentValue}`;
    } else {
      result += ' ..';
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
