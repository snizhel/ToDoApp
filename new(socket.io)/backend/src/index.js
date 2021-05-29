const app = require("./server");
const config = require("./config");

const Database = require("./database");
const { instance } = require("./database");
const db = new Database();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" } });



//key string to connect to db
let connectionString =
  "mongodb+srv://admin:admin@cluster0.yhduf.mongodb.net/todo?retryWrites=true&w=majority";


io.on('connection', (socket) => {
  
  
  // io.emit('data',"test")
  socket.on('disconnect', data => {
    // console.log(data);
    // io.emit('data', data);

  })

});


async function main() {
  try {

    //connect to db
    await instance.connectToDb(connectionString);
    //run server with ip:port
    // instance.startServer();
    // db.startServer(config.PORT,config.HOST);
    server.listen(config.PORT, config.HOST, () => {
      console.log(`server is running on ${config.HOST}:${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();




exports.emit = (event, data) => {
  io.emit(event, data);
};