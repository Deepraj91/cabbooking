import UserModel from '../models/user.model.js';
import * as userService from '../services/user.service.js';
import { validationResult } from 'express-validator';

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req); 
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  // Check if user already exists
  const existing = await UserModel.findOne({ email });
  if (existing) {
    return res.status(409).json({ msg: 'User already exists' });
  }

  const hashPassword = await UserModel.hashPassword(password);

  const user = await UserModel.create({
    username,
    email,
    password: hashPassword
  });

  // Generate token
  const token = user.generateAuthToken();

  res.status(201).json({ token, user: { username: user.username, email: user.email, _id: user._id } });
};