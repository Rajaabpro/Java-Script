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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});