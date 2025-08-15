const express = require('express');
const app = express();
const port = 9000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


let posts = [
    {
        username: "Rajaab",
        content: "Hello, world!"
    },
    {
        username: "John",
        content: "Hello, world!"
    },
    {
        username: "Jane",
        content: "Hello, world!"
    }
]
app.get('/posts', (req, res) => {
    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});