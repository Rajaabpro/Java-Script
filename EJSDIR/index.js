const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home.ejs", {
        title: "Home",
        message: "Hello World",
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {
        title: "About",
        message: "About Page",
    });
});


app.get("/contact", (req, res) => {
    res.render("contact.ejs", {
        title: "Contact",
        message: "Contact Page",
    });
});


app.get("/ig/:username", (req, res) => {
    const followers = ["John", "Jane", "Jim", "Jill", "Jack", "Jill", "Jim", "Jane", "John", "Jack"];
    let {username} = req.params;
    console.log(username);
    res.render("insta.ejs", {
        username: username,
        followers: followers,
    });
});


app.get("/rolldice", (req, res) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {
        title: "Roll Dice",
        message: "Roll Dice Page",
        dice: dice,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});