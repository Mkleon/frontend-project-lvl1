import { car, cdr, cons } from '@hexlet/pairs';

export const saveQuestionAndAnswer = (question, correctAnswer) => cons(question, correctAnswer);

export const getQuestion = (questionAndAnswer) => car(questionAndAnswer);

export const getAnswer = (questionAndAnswer) => cdr(questionAndAnswer);
