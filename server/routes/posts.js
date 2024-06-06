import express from 'express';

import {getPostsBySearch, getPost ,getPosts,createPost,updatePost,deletePost,likePost, commentPost  } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//  /posts
router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get("/:id", getPost)

router.post('/', auth, createPost);
router.post('/:id/commentPost', commentPost);

router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);

router.delete('/:id', auth, deletePost);


export default router;