import { Request, Response } from 'express';
import { IQuestionData } from '../types/questionTypes';
import * as questionService from '../services/questionService'
import * as answerService from '../services/answerService'
import { IAnswerData } from '../types/answerTypes';
import { Question } from '@prisma/client';

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body

  await questionService.makeQuestion(question)

  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const answer: IAnswerData = req.body
  const questionId: number = Number(req.params.id)

  await answerService.answerQuestion(answer, questionId)

  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const questions: Question[] | null = await questionService.allQuestions()

  res.status(200).send({ questions })
}

export async function getById(req: Request, res: Response) {
  // TODO
}
