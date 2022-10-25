const express = require('express');
const app = express();
const PORT = 4000;

// built-in middleware for json 
app.use(express.json());

app.get('/', async(req, res) => {
    res.send("Hello World");
});

// routes
app.use('/questions', require('./routes/questions'));

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`);
});