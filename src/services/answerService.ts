import { IAnswerData } from "../types/answerTypes";
import * as answerRepository from '../repositories/answerRepository'
import { Question } from "../interface/questionInterface";
import * as questionService from '../services/questionService'

export async function answerQuestion(answer: IAnswerData, questionId: number) {
    const isQuestion: Question | null = await questionService.getQuestionById(questionId)

    if (!isQuestion) {
        throw { type: 'not_found' }
    }

    await answerRepository.insert(answer, questionId)
}
