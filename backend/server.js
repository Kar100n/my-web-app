const express = require('express');
const app = express();
const port = 3002;
const path = require('path');

// Middleware to serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, '../frontend')));

app.use(express.json()); // Parse JSON requests

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.post('/api/action', (req, res) => {
    // Simulate an action on the backend
    res.json({ result: 'Action performed on the backend!' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
