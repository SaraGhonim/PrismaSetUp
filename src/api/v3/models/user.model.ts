import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userModel = prisma.user;

export const findAll = async () => {return await userModel.findMany();};

export const findUser = async (email: string) => {
  return await userModel.findMany({where: { email:email },});
};

export const create = async (
  email: string,
  password: string,
  name: string
) => {
  return await userModel.create({
    data: {
      email: email,
      password: password,
      name: name,
    },
  });
};

export const update = async (email: string,name: string) => {
  return await userModel.update({
    where: { email: email },
    data: { name },
  });
};


export const deleteUser = async (email: string) => {
    return await userModel.delete({
      where: { email: email },
    });
  };