const express = require("express");
const { console } = require("inspector");
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send(`<h1>ich bin ein parameter ${req.params.username} und ${req.params.id}</h1>`);
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page News and blogs");

});

app.get("/search", (req, res) => {
    let {q} = req.query;
    res.send(`<h1>ich bin ein query ${q}</h1>`);
});

// app.get("/*", (req, res) => {
//     res.send("404 Page Not Found");
// });

app.post("/post", (req, res) => {
    res.send("POST Request POST Page");
});

// app.use((req, res) => {
//     console.log(req.url);
//     console.log("Request received");
//     res.send({
//         message: "Hello World",
//         name: "John Doe",
//         age: 20,
//         email: "john.doe@example.com",
//         phone: "1234567890",
//         address: "123 Main St, Anytown, USA",
//         city: "Anytown",
//         state: "CA",
//     });
// });
