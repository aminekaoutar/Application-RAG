const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'minimal_frontend')));

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'minimal_frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});