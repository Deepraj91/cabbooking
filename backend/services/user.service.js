import UserModel from '../models/user.model.js';

export const createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error('All fields are required');
  }
  const user = await UserModel.create({
    username,
    email,
    password: await UserModel.hashPassword(password)
  });
  return user;
};