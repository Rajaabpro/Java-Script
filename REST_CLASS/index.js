const { log } = require('console');
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = 9090;
const path = require('path');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

let posts = [
    {
        id: uuidv4(),
        username: "Rajaab",
        content: "Hello, world! I am Rajaab and I am a student"
    },
    {
        id: uuidv4(),
        username: "John",
        content: "Hello, world! I am John and I am a student"
    },
    {
        id: uuidv4(),
        username: "Jane",
        content: "Hello, world! I am Jane and I am a student"
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
    let Id = uuidv4();
    posts.push({ id: Id, username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(post => post.id === id);
    if (!post) {
        return res.status(404).render('show', { post: null });
    }
    res.render('show', { post });
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find(post => post.id === id);
    post.content = newContent;
    res.redirect(`/posts/${id}`);
});

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find(post => post.id === id);
    res.render("edit.ejs", { post });
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter(post => post.id !== id);
    res.redirect('/posts');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});