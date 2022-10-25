const express = require("express");
const router = express.Router();
const questionController = require('../controllers/questionController');
const commentController = require('../controllers/commentController');



// Question
router.get('/', questionController.handlegetQuestion);
router.get('/:questionId', questionController.handlegetQuestionById);
router.post('/', questionController.handleCreateQuestion);
router.put('/:questionId', questionController.handleEditQuestion);
router.delete('/:questionId', questionController.handleDeleteQuestion);

// Comment
router.get('/:questionId/comment', commentController.handlegetCommentByQuestionId)
router.post('/:questionId/comment', commentController.handleCreateCommentByQuestionId)
router.put('/:questionId/comment/:commentId', commentController.handleEditCommentByQuestionId)
router.delete('/:questionId/comment/:commentId', commentController.handleDeleteCommentByQuestionId)
module.exports = router;