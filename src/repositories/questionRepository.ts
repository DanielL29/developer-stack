import { Question } from "@prisma/client";
import { prisma } from "../config/database";
import { IQuestionData, QuestionAnswers } from "../types/questionTypes";

export async function insert(question: IQuestionData) {
    await prisma.question.create({ data: question })
}

export async function findById(id: number): Promise<Question | null> {
    const question: Question | null = await prisma.question.findUnique({ where: { id } })

    return question
}

export async function findAll(): Promise<Question[] | null> {
    const questions: Question[] | null = await prisma.question.findMany()

    return questions
}

export async function findQuestionAnswers(id: number): Promise<QuestionAnswers | null> {
    const questionAnswers: QuestionAnswers | null = await prisma.question.findUnique({
        where: { id },
        include: {
            answers: {
                select: {
                    answeredBy: true,
                    answer: true
                }
            }
        }
    })

    return questionAnswers
}