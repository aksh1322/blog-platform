import { Router } from 'express';
import { getAllPosts, getSinglePost, createNewPost, updateExistingPost, deleteExistingPost } from '../controllers/postControllers';

const router = Router();

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.post('/', createNewPost);
router.put('/:id', updateExistingPost);
router.delete('/:id', deleteExistingPost);

export default router;
