const mongoose = require("mongoose");
const todoSchema = require("../schemas/todo.schemas");
const Todo = mongoose.model("todo", todoSchema);

class Database {
  /**
   *
   * @type {Database}
   */
  static _cache = null;

  /**
   *
   * @returns {Promise<mongoose.Connection>}
   */
  async connectToDb(connectionString) {
    //connect to db using promise and async
    return new Promise((resolve, reject) => {
      mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex:true
      });

      const db = mongoose.connection;
      //connection failed
      db.on("error", (err) => {
        reject("connection error:");
      });
      //connect successs!
      db.once("open", function () {
        console.log("connected to server!");

        resolve(db);
      });
    });
  }

  async createTodo(name, message) {
    let temp = new Todo({
      id: mongoose.Types.ObjectId(),
      name: name,
      message: message
    });
    try {
      await temp.save();
    } catch (err) {
      console.log("fail to create item!");
    }
  }

  async getAllTodo() {
    let result = Todo.find();
    try {
      return await result;
    } catch (err) {
      console.log("fail to get items!");
    }
  }
  async deleteTodo(id) {
    try {
      await Todo.findOneAndRemove({id:id});
    } catch (err) {
      console.log("fail to delete items!");
    }
  }
  async updateTodo(id, name, message) {
    try {
      await Todo.findOneAndUpdate(id, {
        name: name,
        message: message
      });
    } catch (err) {
      console.log("fail to update items!");
    }
  }

  /**
   *
   * @type {Database}
   */
  static get instance() {
    if (this._cache == null) {
      this._cache = new Database();
    }
    return this._cache;
  }
}

module.exports = Database;
