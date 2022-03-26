const socketIO = require('socket.io');

const socketServer = (httpServer) => {
	const io = socketIO(httpServer);

	io.on('connection', socket => {
		console.log('Connected');
		console.log('listening to connection with socket-id: ', socket.id);
	
		socket.on('disconnect', () => {
			console.log('Disconnected: ', socket.id)
		});
	})

	return io;
}

module.exports = socketServer;