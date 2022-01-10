const mongoose = require("mongoose");
const todoSchema = require("../schemas/todo.schemas");
const Todo = mongoose.model("todo", todoSchema);
// const { instance } = require("./index");
const app = require("./server");
const io = require("./index");



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
        useCreateIndex: true
      });

      const db = mongoose.connection;
      //connection failed
      db.on("error", (err) => {
        reject("connection error:");
      });
      //connect successs!

      db.once("open", function () {
        console.log("connected to server!");
        
        const todoStream = db.collection("todos").watch();

        todoStream.on("change", (change) => {

          switch (change.operationType) {
            case 'insert': {
              let todo = {
                _id: change.fullDocument._id,
                name: change.fullDocument.name,
                message: change.fullDocument.message,
              };
              // console.log(todo);
              io.emit("newData", todo);

              return;
              break;
            }


            case 'replace': {
              let todo = {
                _id: change.fullDocument._id,
                name: change.fullDocument.name,
                message: change.fullDocument.message,
              };
              io.emit("replaceData", todo);
              // console.log('update');
              return;
              break;
            }

            case 'delete': {
              io.emit("deleteData", change.documentKey._id);
              // console.log('delete');
              return;
              break;
            }



            default:
              break;
          }
        })

        resolve(db);
      });
    });
  }



  async createTodo(name, message, user) {
    let data = {
      name: name,
      message: message,
      user: user
    }
    let temp = new Todo(data);
    // console.log(data);
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
      await Todo.deleteOne({ _id: id });
    } catch (err) {
      console.log("fail to delete items!");
    }
  }
  async updateTodo(id, name, message, user) {
    try {
      // console.log(user);
      await Todo.replaceOne({ _id: id }, {
        name: name,
        message: message,
        user:user
      });
    } catch (err) {
      console.log("fail to update items!");
    }
  }

  async test(email) {
    // console.log(email);
    try {
      return await Todo.find({ "user.email": email.email })
    } catch (error) {
      console.log("cant");
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
