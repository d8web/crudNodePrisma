import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // constante prisma é o banco de dados em si.

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});

    const user = await prisma.user.create({
        data: {
            email: "daniel@gmail.com",
            name: "Daniel",
            age: 26
        }
    });

    const post = await prisma.post.create({
        data: {
            title: "Post de teste criado via seed",
            body: "Este é um post de teste...",
            authorId: user.id
        }
    })
}

main();