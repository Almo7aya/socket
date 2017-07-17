/*
Socket io test for send the Socket to one client
*/

const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);
const port    = process.env.PORT || 3000;


//set the views

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//set the middleware
app.use(express.static(__dirname + '/static'));

//dealing with io

app.get('/', (req, res) => {

    res.render('index');

});

let users = 0;

io.on('connection', socket => {

    socket.on('commit', msg => {
        io.to(socket.id).emit('back', msg + socket.id);
    });

    users++;
    io.emit('users', users);
    socket.on('disconnect', i => {
        users--;
        io.emit('users', users);
    });

});


http.listen(port, () => console.log('server is running ar port' + port));