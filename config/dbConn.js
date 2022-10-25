const { Pool } = require('pg')

const pool = new Pool({
  connectionString: "postgresql://postgres:t9150324@localhost:5432/question_posts",
});

module.exports = {pool}