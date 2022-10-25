const { pool } = require('../config/dbConn');

const handlegetCommentByQuestionId = async (req, res) => {
    const questionId = req.params.questionId;
    const result = await pool.query("select questions.question_id, comments.content from questions join comments on questions.question_id = comments.question_id where questions.question_id = $1", [questionId] );

    return (
        res.json({data: result.rows})
    );

};

const handleCreateCommentByQuestionId = async (req, res) => {
    const newComment = req.body;
    const questionId = req.params.questionId;
    const result = await pool.query("insert into comments(question_id,user_id, content, likes) values ($1, $2, $3, $4)",
    [
        questionId,
        1, // this is mock user_id actually should from auth
        newComment.content,
        0
    ])
    return (
        res.json({
            message: "comment has been created successfully"
          })
    )
}

const handleEditCommentByQuestionId = async (req, res) => {
    const commentId = req.params.commentId;
    const result = await pool.query("update comments set content=$1 where comment_id=$2",
    [
        newComment.content,
        commentId
    ])
    return (
        res.json({
            message: "comment has been updated successfully"
          })
    )
}

const handleDeleteCommentByQuestionId = async (req, res) => {
    const commentId = req.params.commentId;
    const result = await pool.query("delete from comments where comment_id=$1",[commentId])
    return (
        res.json({
            message: "comment has been delete successfully"
          })
    )
}

module.exports = { 
    handlegetCommentByQuestionId,
    handleCreateCommentByQuestionId,
    handleEditCommentByQuestionId,
    handleDeleteCommentByQuestionId,
};