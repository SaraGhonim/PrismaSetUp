import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

  
  export const insertNote = async (title: string, content: string) => {
    const response = await prisma.note.create({
      data: {
        title: title,
        content: content,
        authorId: 10022,
      },
    });
  
    return response;
  };
  