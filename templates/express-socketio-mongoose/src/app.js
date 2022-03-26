require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

require('./lib/dbConnection');


io.on('connection', socket => {
	console.log('Connected');
	console.log('listenning to connection with socket-id: ', socket.id);

	socket.on('disconnect', () => {
    console.log('Disconnected: ', socket.id)
  });
})

module.exports = server;