import { prisma } from "../config/database";
import { IQuestionData } from "../types/questionTypes";

export async function insert(question: IQuestionData) {
    await prisma.question.create({ data: question })
}