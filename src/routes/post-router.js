import express from 'express';
import { getPosts } from '../resolvers/post/get-posts.js'; 

export const postRouter = express.Router();

postRouter.get('/', getPosts);

export default postRouter;
