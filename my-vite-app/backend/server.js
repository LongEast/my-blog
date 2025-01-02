const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/db'); // Import the database

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/blogs', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM blogs').all();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

app.post('/api/blogs', (req, res) => {
  const { title, content } = req.body;
  try {
    const stmt = db.prepare('INSERT INTO blogs (title, content) VALUES (?, ?)');
    const info = stmt.run(title, content);
    res.json({ id: info.lastInsertRowid, title, content });
  } catch (error) {
    res.status(500).json({ message: 'Error adding blog' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});