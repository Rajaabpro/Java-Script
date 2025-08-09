const express = require("express");
const { console } = require("inspector");
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page News and blogs");

});


app.get("*", (req, res) => {
    res.send("404 Page Not Found");
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
