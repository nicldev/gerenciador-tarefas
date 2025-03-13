const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let tasks = [];

// Create
app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).send(task);
});

// Read
app.get('/tasks', (req, res) => {
    res.status(200).send(tasks);
});

// Update
app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const updatedTask = req.body;
    tasks[id] = updatedTask;
    res.status(200).send(updatedTask);
});

// Delete
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    tasks.splice(id, 1);
    res.status(204).send();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});