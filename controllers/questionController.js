const { pool } = require('../config/dbConn');

const handlegetQuestion = async (req, res) => {
    let result;
    const {title, category} = req.query;

    if (title){
        result = await pool.query("select * from questions where title ilike $1 order by question_id asc",[title])
    }else if (category){
        result = await pool.query("select * from questions where category ilike $1 order by question_id asc",[category])
    }else if (title && category){
        result = await pool.query("select * from questions where title ilike $1 and category ilike $2 order by question_id asc",[title, category])
    }else{
        result = await pool.query("select * from questions order by question_id asc")
    }
    
    return (
        res.json({data: result.rows})
    )
}

const handlegetQuestionById = async (req, res) => {
    const questionId = req.params.questionId;
    const result = await pool.query("select * from questions where question_id=$1", [questionId] );

    if (result.rows.length === 0) {
        res.send("This Question is not valid")
    }else{
        return (
            res.json(result.rows)
        );
    }
};

const handleCreateQuestion = async (req, res) => {
    const newQuestion = req.body
    const result = await pool.query("insert into questions(user_id, title, content, category, likes) values ($1, $2, $3, $4, $5)",
    [
        1, // this is mock user_id actually should from auth
        newQuestion.title,
        newQuestion.content,
        newQuestion.category,
        0
    ])
    return (
        res.json({
            message: "question has been created successfully"
          })
    )
}

const handleEditQuestion = async (req, res) => {
    const newQuestion = req.body
    const questionId = req.params.questionId;
    const result = await pool.query("update questions set user_id=$1, title=$2, content=$3, category=$4, likes=$5 where question_id=$6",
    [
        1, // this is mock user_id actually should from auth
        newQuestion.title,
        newQuestion.content,
        newQuestion.category,
        0,
        questionId
    ])
    return (
        res.json({
            message: "question has been updated successfully"
          })
    )
}

const handleDeleteQuestion = async (req, res) => {
    const questionId = req.params.questionId;
    const result = await pool.query("delete from questions where question_id=$1",[questionId])
    return (
        res.json({
            message: "question has been delete successfully"
          })
    )
}

module.exports = { 
    handlegetQuestion,
    handlegetQuestionById,
    handleCreateQuestion,
    handleEditQuestion,
    handleDeleteQuestion
};