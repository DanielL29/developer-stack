import { Answer } from "@prisma/client";
import { Question } from "../interface/questionInterface";
import { IAnswerData } from "./answerTypes";

export type IQuestionData = Omit<Question, 'id'>
export type QuestionAnswers = Question & { answers: IAnswerData[] }