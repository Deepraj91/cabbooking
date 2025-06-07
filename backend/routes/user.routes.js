import express from 'express';
import { body } from 'express-validator';
import { registerUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  registerUser
);

export default router;