import readlineSync from 'readline-sync';

export const getUserAnswer = (question) => readlineSync.question(question);

export const findOutUserName = () => getUserAnswer('May I have your name? ');

export const showToUser = (message) => console.log(message);
