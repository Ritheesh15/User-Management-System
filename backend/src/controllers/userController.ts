import { Request, Response } from 'express';
import User from '../models/User';
import { JwtPayload } from 'jsonwebtoken';

// Type guard to check if req.user is JwtPayload and has the id property
const isJwtPayloadWithId = (user: string | JwtPayload): user is JwtPayload & { id: string } => {
  return (user as JwtPayload).id !== undefined;
};

// Update user profile
export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user || !isJwtPayloadWithId(req.user)) {
      return res.status(401).json({ msg: 'Authorization denied' });
    }
    
    const userId = req.user.id;
    const { name, email, bio } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.bio = bio || user.bio;

    await user.save();

    res.json(user);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
    res.status(500).send('Server error');
  }
};


// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
    res.status(500).send('Server error');
  }
};

// Get a single user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
    res.status(500).send('Server error');
  }
};

// Get user profile
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user || !isJwtPayloadWithId(req.user)) {
      return res.status(401).json({ msg: 'Authorization denied' });
    }
    
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
    res.status(500).send('Server error');
  }
};



