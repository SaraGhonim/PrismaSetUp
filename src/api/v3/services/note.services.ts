import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



export const retrieveNotes = async () => {
  const result = await prisma.note.findMany();
  return result;
};


export const retrieveNote = async (id:string) => {

  const result = await prisma.note.findMany({
    where: { id: Number(id) },
  }); return result;
};



export const insertNote = async (title: string, content: string,authorId:string) => {
    const result = await prisma.note.create({
      data: {
        title: title,
        content: content,
        authorId: Number(authorId),
      },
    });
  
    return result;
  };
  

export const editNote = async (id: string, title: string) => {

    const result = await prisma.note.update({
        where: { id: Number(id) },
        data: { title },
      });
  
    return result;
  };
 

export const removeNote = async (id: string) => {

    const result = await prisma.note.delete({
        where: { id: Number(id) },
      });
  
    return result;
  };
 