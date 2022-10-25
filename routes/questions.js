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
module.exports = router;