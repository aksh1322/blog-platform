import { Request, Response } from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../models/postModel';

export const getAllPosts = (req: Request, res: Response): void => {
  res.json(getPosts());
};

export const getSinglePost = (req: Request, res: Response): void => {
  const post = getPostById(Number(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

export const createNewPost = (req: Request, res: Response): void => {
  const newPost = req.body;
  createPost(newPost);
  res.status(201).json(newPost);
};

export const updateExistingPost = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  updatePost(id, req.body);
  res.status(200).json({ message: 'Post updated' });
};

export const deleteExistingPost = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  deletePost(id);
  res.status(200).json({ message: 'Post deleted' });
};
