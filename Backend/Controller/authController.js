import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../Model/userModal.js';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

      res.json({ user, token });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error logging in', error });
  }
};
