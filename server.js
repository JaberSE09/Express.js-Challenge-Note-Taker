const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");
const notes = require("./db/db.json");
const fs = require("fs");
const { runInNewContext } = require("vm");
app.use(express.json());

app.get("/notes", (req, res) => res.sendFile(path.join(__dirname , "public" , "notes.html")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname , "public" , "index.html")));

app.get("/api/notes", (req, res) => res.json(notes));
app.post("/api/notes", (req, res) => {});

app.listen(PORT, () => {
  console.log(`API server now on port http://localhost${PORT}`);
});