const express = require('express')
const { pool } = require('./config/dbConn')
const app = express()
const PORT = 4000

app.get('/', async(req, res) => {
    const result = await pool.query("select * from questions")
    return (
        res.json(result.rows)
    )
})

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`);
})