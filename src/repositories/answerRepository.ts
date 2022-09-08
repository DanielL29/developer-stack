import { prisma } from "../config/database";
import { IAnswerData } from "../types/answerTypes";

export async function insert(answer: IAnswerData, questionId: number) {
    await prisma.answer.create({ data: { ...answer, questionId } })
}