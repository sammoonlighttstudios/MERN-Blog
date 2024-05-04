import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const sighup = async (req, res, next) => {
  const { username, email, password } = req.body;


  if (!username
    || !email
    || !password
    || username === ''
    || email === ''
    || password === '') {
    next(errorHandler(400, 'Please provide all fields'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User(
    {
      username,
      email,
      password: hashedPassword
    });

  try {
   await newUser.save();
    res.json('sighup success');
  } catch (error) {
   next(error);
  }

 
}

