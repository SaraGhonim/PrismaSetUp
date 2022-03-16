import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const retrieveUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};


export const retrieveUser = async (id:string) => {

  const result = await prisma.user.findMany({
    where: { id: Number(id) },
  }); return result;
};  
  export const insertUser = async (email: string, password: string,name:string) => {
    const response = await prisma.user.create({
      data: {
        email: email,
        password: password,
        name:name,
      },
    });
  
    return response;
  };
 
  
  export const editUser = async (id: string, name: string) => {

    const response = await prisma.user.update({
        where: { id: Number(id) },
        data: { name },
      });
  
    return response;
  };
 

  export const removeUser = async (id: string) => {

    const response = await prisma.user.delete({
        where: { id: Number(id) },
      });
  
    return response;
  };
 