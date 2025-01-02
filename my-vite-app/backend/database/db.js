// database/db.js
const Database = require('better-sqlite3');
const path = require('path');

// Connect to the SQLite database (or create it if it doesn't exist)
const dbPath = path.resolve(__dirname, 'blogs.db');
const db = new Database('blog.db');

// Create a table for blogs if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  )
`);

module.exports = db;