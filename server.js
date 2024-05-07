// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;


// //Import Routes
// const projectRoute = require('./routes/projects');

// //Middleware
// app.use(express.static(__dirname + '/public'))
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));

// //Use Routes
// app.use('/api/projects', projectRoute);

// app.listen(port, () => {
//     console.log("App Listening on port " + port);
// });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Import Routes
const projectRoute = require('./routes/projects');

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use Routes
app.use('/api/projects', projectRoute);

// Socket.IO logic
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

// Start the server
http.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

