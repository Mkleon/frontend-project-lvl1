import { random } from 'lodash';
import { joinQuestionAndAnswer } from '../library';
import gameEngine from '..';

const gameDescription = 'What is the result of the expression?';
const sings = '+-*';

const getResult = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const generateQuestionAndAnswer = () => {
  const number1 = random(0, 9);
  const number2 = random(0, 9);
  const randomSign = sings[random(0, sings.length - 1)];

  const question = `${number1} ${randomSign} ${number2}`;
  const correctAnswer = (String)(getResult(number1, number2, randomSign));

  return joinQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  gameEngine(gameDescription, generateQuestionAndAnswer);
};
