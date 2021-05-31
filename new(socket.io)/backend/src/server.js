
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

app.get("/todosUser", async (req, res) => {
  let email = req.query;
  // let { email, email_verified, given_nam, locale, name, nickname, picture, sub, updated_at } = req.body;
  // let user = {
  //   email: email,
  //   email_verified: email_verified,
  //   given_nam: given_nam,
  //   locale: locale,
  //   name: name,
  //   nickname: nickname,
  //   picture: picture,
  //   sub: sub,
  //   updated_at: updated_at
  // }

  // console.log(email);
  let result = await db.test(email);

  res.send(result);
});


app.post("/createTodo", (req, res) => {
  let { name, message, user } = req.body;
  // console.log(user);
  (async () => {
    await db.createTodo(name, message, user);
    res.send();
  })();
});


app.delete("/delete", (req, res) => {
  let { id } = req.query;

  (async () => {
    await db.deleteTodo(id);
    res.send();
  })();
});

app.put("/update", (req, res) => {
  let { id, name, message, user } = req.body;
  (async () => {
    try {
      await db.updateTodo(id, name, message, user.data);
      res.send();
    } catch (error) {
      console.log("can't update")
    }

  })();
})

module.exports = app;
