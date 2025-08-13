const express = require('express');

const app = express();
const port = 5050;

app.get('/register', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});