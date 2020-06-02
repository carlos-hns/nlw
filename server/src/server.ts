import express from 'express';

const app = express();

app.get("/users", (req, res) => {
    console.log("Oi");

    res.json([
        "Diego",
        "Cleiton",
        "Robson",
        "Carlos"
    ])
});

app.listen(3333);