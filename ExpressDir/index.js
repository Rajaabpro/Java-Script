const express = require("express");
const { console } = require("inspector");
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((req, res, next) => {
    console.log(req);
    console.log("Request received");
    next();
});
