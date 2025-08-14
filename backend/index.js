const express = require('express');

const app = express();
const port = 5050;

app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    const { name, password } = req.query;
    res.send(`Hello this is get request ${name}  ${password}`);
});

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    res.send(`Hello this is post request ${name}  ${password}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});