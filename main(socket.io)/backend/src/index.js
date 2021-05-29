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
  console.log('user connected:' + socket.id);
  
  socket.on('data',data=>{
    console.log(data);
  })
  
  // //mỗi khi front end emit gọi lại
  // socket.on('message', data => {
  //   console.log(data);
  //   // io.emit('message', temp);

  // })
});



async function main() {
  try {

    //connect to db
    await instance.connectToDb(connectionString);
    //run server with ip:port
    server.listen(config.PORT, config.HOST, () => {
      console.log(`server is running on ${config.HOST}:${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
