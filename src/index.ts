import express from "express";
import pino from "pino-http";

const app = express();
app.use(pino());

app.get("/", function (req, res) {
    req.log.info("something");
    res.send("hello pino!");
});

app.listen(3000);
