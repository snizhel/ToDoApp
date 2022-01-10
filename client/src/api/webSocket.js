
import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_BACKEND_URL);

const webSocket = {
    on: (event,data) => {
        
        return socket.on(event,data);
    },
    emit: (event,data) => {
        return socket.emit(event,data);
    },


}

socket.on('test',data=>{
    // console.log(data)
    socket.emit('start',data)
})

export default webSocket;