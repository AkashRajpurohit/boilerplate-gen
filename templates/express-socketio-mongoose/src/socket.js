const socketIO = require('socket.io');
const { getAllUsers } = require('./controllers/user.controller');

const socketServer = (httpServer) => {
	const io = socketIO(httpServer);

	io.on('connection', socket => {
		console.log('Connected');
		console.log('listening to connection with socket-id: ', socket.id);
	
		socket.on('disconnect', () => {
			console.log('Disconnected: ', socket.id)
		});

		socket.on('get-users', async () => {
			const users = await getAllUsers();
			io.emit('users', users)
		})
	})

	return io;
}

module.exports = socketServer;