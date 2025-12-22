const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Node Task API is running');
});

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
