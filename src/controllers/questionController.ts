import { Request, Response } from 'express';
import { IQuestionData } from '../types/questionTypes';
import * as questionService from '../services/questionService'

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body

  await questionService.makeQuestion(question)

  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
