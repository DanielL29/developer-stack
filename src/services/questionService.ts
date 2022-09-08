import { IQuestionData } from "../types/questionTypes";
import * as questionRepository from '../repositories/questionRepository'

export async function makeQuestion(question: IQuestionData) {
    await questionRepository.insert(question)
}