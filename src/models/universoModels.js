import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.universoficcionais.findMany({
        orderBy: { nome: 'asc'}
    });
}

export const encontreUm = async () => {
    return await prisma.universoficcionais.findUnique({
        where: { id: Number(id)}
    })
}