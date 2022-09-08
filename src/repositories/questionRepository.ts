import { Question } from "@prisma/client";
import { prisma } from "../config/database";
import { IQuestionData } from "../types/questionTypes";

export async function insert(question: IQuestionData) {
    await prisma.question.create({ data: question })
}

export async function findById(id: number): Promise<Question | null> {
    const question: Question | null = await prisma.question.findUnique({ where: { id } })

    return question
}
