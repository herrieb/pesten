const chat = require('./chat.js');
const game = require('./game.js');
module.exports = {
    start: (io) => {
        // io.on('connection', function (socket) {
        //     socket.on('chat message', function (msg) {
        //         io.emit('chat message', msg);
        //     });
        // });
        chat.start(io);
        game.start(io);
    }
};

