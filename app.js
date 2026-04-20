const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("TNP Placement Cell System Running 🚀");
});

app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Aditi", branch: "CSE" },
        { id: 2, name: "Rahul", branch: "IT" }
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});