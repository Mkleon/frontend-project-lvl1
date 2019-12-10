import { random } from 'lodash';
import { joinQuestionAndAnswer } from '../library';
import gameEngine from '..';

const gameDescription = 'What number is missing in the progression?';

const getArithmeticProgression = (firstItemValue, diff, indexOfHiddenItem, progresLength) => {
  let result = '';

  for (let i = 0; i < progresLength; i += 1) {
    result = `${result} ${(i !== indexOfHiddenItem) ? (firstItemValue + (diff * i)) : '..'}`;
  }

  return result;
};

const generateQuestionAndAnswer = () => {
  const progresLength = 10;
  const diff = random(1, 10);
  const firstItemValue = random(1, 99);
  const indexOfHiddenItem = random(0, progresLength - 1);
  const hiddenItemValue = firstItemValue + (diff * indexOfHiddenItem);

  const question = getArithmeticProgression(firstItemValue, diff, indexOfHiddenItem, progresLength);
  const correctAnswer = (String)(hiddenItemValue);

  return joinQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
