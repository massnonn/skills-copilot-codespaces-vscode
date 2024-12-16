// Create web server
// Start web server
// Listen on port 3000

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const commentsPath = 'comments.json';

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.get('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments file');
            return;
        }