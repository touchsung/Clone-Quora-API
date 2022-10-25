const { pool } = require('../config/dbConn');

const handlegetCommentByQuestionId = async (req, res) => {
    const questionId = req.params.questionId;
    const result = await pool.query("select questions.question_id, comments.content from questions join comments on questions.question_id = comments.question_id where questions.question_id = $1", [questionId] );

    return (
        res.json({comment: result.rows})
    );

};

module.exports = { 
    handlegetCommentByQuestionId
};