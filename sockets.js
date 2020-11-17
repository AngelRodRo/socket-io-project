const socket = require('socket.io');

module.exports = http => {
    const io = socket(http);

    io.on('connection', socket => {
        console.log('Nuevo usuario!');
    });


}