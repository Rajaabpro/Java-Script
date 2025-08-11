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
    res.render("insta.ejs");
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