import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = [];

const addUser = (userData, socketId) =>{
    
    !users.some(user => user.sub === userData.sub) &&users.push({ ...userData, socketId});
    
}

const getUser =(userId) => {
    // console.log(userId);
    return users.find(user => {user.sub === userId 
    console.log(user);});
}

io.on('connection', (socket) => {
    console.log("socket connection");
    socket.on('addUsers', userData => {
        console.log("shusyuj",userData) 
        addUser(userData, socket.id);
        io.emit('getUsers', users);
    });
    
    socket.on('sendMessage', data => {
        console.log("Received sendMessage request with receiverId:", data.receiverId);
        const user = getUser(data.receiverId);
        // io.to(user?.socketId).emit('getMessage', data);
        if (user) {
            io.to(user.socketId).emit('getMessage', data);
        } else {
            // Handle the case when the user with the specified receiverId is not found.
            console.log(`User with receiverId ${data.receiverId} not found.`);
            // Optionally, you can send an error message to the sender or take other actions.
        }
    })

})
