import readlineSync from 'readline-sync';

const printToScreen = (text) => console.log(text);

const getUserAnswer = (question) => readlineSync.question(question);

export const greeting = () => {
  printToScreen('Welcome to the Brain Games!\n');
};

export const findOutUserName = () => {
  const name = getUserAnswer('May I have your name? ');

  printToScreen(`Hello, ${name}!`);
};
