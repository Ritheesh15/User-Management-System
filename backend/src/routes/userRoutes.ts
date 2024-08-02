import { Router } from 'express';
import { getUserProfile, updateUserProfile,  getUsers, getUserById } from '../controllers/userController';
import auth from '../Middleware/authMiddleware';

const router: Router = Router();

router.get('/profile', auth, getUserProfile);
router.put('/profile/edit', auth, updateUserProfile);
router.get('/', auth, getUsers);
router.get('/:id', auth, getUserById);

export default router;
