const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const CommentssRoutes = require('./CommentsssRoutes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/Commentsss,CommentsssRoutes');
module.exports = router;
