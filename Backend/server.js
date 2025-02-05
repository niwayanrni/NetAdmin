const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "balivibestour",
    password: "54321",
    database: "balivibestour"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database!");
});

// Endpoint
app.get("/api/tours", (req, res) => {
    db.query("SELECT * FROM Isipakettour", (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            res.json(results);
        }
    });
});

app.listen(5000, () => {
    console.log("Server berjalan di port 5000");
});
