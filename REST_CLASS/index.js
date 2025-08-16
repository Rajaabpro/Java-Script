const { log } = require('console');
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = 9090;
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


let posts = [
    {
        id: uuidv4(),
        username: "Rajaab",
        content: "Hello, world!"
    },
    {
        id: uuidv4(),
        username: "John",
        content: "Hello, world!"
    },
    {
        id: uuidv4(),
        username: "Jane",
        content: "Hello, world!"
    }
]

app.get('/posts', (req, res) => {
    res.render('index', { posts });
});

app.get('/posts/new', (req, res) => {
    res.render('new');
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(post => post.id === parseInt(id));
    res.render('show', { post });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});