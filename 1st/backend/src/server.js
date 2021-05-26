
const express = require("express");
const cors = require("cors");
const body = require("body-parser");
const app = express();

app.use(cors());
app.use(body.json());

const Database = require("./database");
const db = new Database();


app.get("/todos", async (req, res) => {
  let result = await db.getAllTodo();
  res.send(result);
});


app.post("/createTodo",  (req, res) => {
  let { name,message } = req.body;
  
  (async () => {
    await db.createTodo(name,message);
    res.send();
  })();
});


app.delete("/delete",  (req, res) => {
  let { id } = req.query;

  (async () => {
    await db.deleteTodo(id);
    res.send();
  })();
});

app.put("/update",  (req, res) => {
  let { id,name,message } = req.body;
  (async () => {
    await db.updateTodo(id,name,message);
    res.send();
  })();
})

module.exports = app;
