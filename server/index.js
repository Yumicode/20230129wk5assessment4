const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, readFortune } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/fortune", readFortune);
app.post("/drink", addDrink)
app.put("/drink", changeDrink)
app.delete("/drink", deleteDrink)
app.listen(4000, () => console.log("Server running on 4000"));
