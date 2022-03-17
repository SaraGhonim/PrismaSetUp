import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import * as userModel from "../models/user.model";


export const retrieveUsers = async () => {
  return userModel.findAll();
};

export const retrieveUser = async (email: string) => {
  const user = await userModel.findUser(email);
  if (!user.length) return"Not found"

  return user;
};

export const insertUser = async (
  email: string,
  password: string,
  name: string
) => {
  const user = await userModel.findUser(email);
  if (!user.length) return "Already exist"

  const result = await userModel.create(email, password, name);

  return result;
};


export const edituser = async (email: string,name:string) => {
  const user = await userModel.findUser(email);
  if (!user.length) return "Not found";

  const result = await userModel.update(email,name);
  return result;
};

export const removeuser = async (email: string) => {
  const user = await userModel.findUser(email);
  if (!user.length) return"Not found"

  const result = await userModel.deleteUser(email);
  return result;
};
