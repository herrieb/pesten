module.exports = {
    start: (io) => {
        io.on('connection', function (socket) {
            socket.on('chat message', function (msg) {
                io.emit('chat message', msg);
            });
        });
    }
};

