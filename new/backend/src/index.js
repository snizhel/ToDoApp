const app = require("./server");
const config = require("./config");

const Database = require("./database");
const { instance } = require("./database");
const db = new Database();

//key string to connect to db
let connectionString =
  "mongodb+srv://admin:admin@cluster0.yhduf.mongodb.net/todo?retryWrites=true&w=majority";

async function main() {
  try {

    //connect to db
    await instance.connectToDb(connectionString);
    //run server with ip:port
    app.listen(config.PORT, config.HOST, () => {
      console.log(`server is running on ${config.HOST}:${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
