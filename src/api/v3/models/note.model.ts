import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const noteModel = prisma.note;

export const getAll = async () => {
  return await noteModel.findMany();
};

export const getNote = async (id: string) => {
  return await noteModel.findMany({
    where: { id: Number(id) },
  });
};

export const create = async (
  title: string,
  content: string,
  authorId: string
) => {
  return await noteModel.create({
    data: {
      title: title,
      content: content,
      authorId: Number(authorId),
    },
  });
};

export const update = async (id: string, title: string) => {
  return await noteModel.update({
    where: { id: Number(id) },
    data: { title },
  });
};


export const deleteNote = async (id: string) => {
    return await noteModel.delete({
      where: { id: Number(id) },
    });
  };