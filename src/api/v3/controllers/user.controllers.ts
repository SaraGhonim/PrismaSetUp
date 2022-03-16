import { RequestHandler } from "express";
import { retrieveUsers,retrieveUser,insertUser, editUser, removeUser } from "../services/user.services";
export const getUsers: RequestHandler = async (req, res) => {
  const Users = await retrieveUsers();
  res.send(Users);
};

export const getUserById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const User = await retrieveUser(id)
  if(!User) res.status(404).send("not found")
  res.send(User);
};
export const addUser: RequestHandler = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const result = await insertUser(email, password, name);
  res.send(result);
};

export const updateUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const name = req.body.name;
  const User = await editUser(id, name);
  if(!User) res.status(404).send("not found")

  res.send('user is updated');
};

export const deleteUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const User = await removeUser(id);
  if(!User) res.status(404).send("not found")

  res.send('user is deleted');
};
