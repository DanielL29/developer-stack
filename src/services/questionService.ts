import { IQuestionData } from "../types/questionTypes";
import * as questionRepository from '../repositories/questionRepository'
import { Question } from "@prisma/client";

export async function makeQuestion(question: IQuestionData) {
    await questionRepository.insert(question)
}

export function getQuestionById(questionId: number): Promise<Question | null> {
    return questionRepository.findById(questionId)
}

export async function allQuestions(): Promise<Question[] | null> {
    const questions: Question[] | null = await questionRepository.findAll()

    return questions
}