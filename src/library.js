import { car, cdr, cons } from '@hexlet/pairs';

export const joinQuestionAndAnswer = (question, correctAnswer) => cons(question, correctAnswer);

export const getQuestion = (questionAndAnswer) => car(questionAndAnswer);

export const getAnswer = (questionAndAnswer) => cdr(questionAndAnswer);
