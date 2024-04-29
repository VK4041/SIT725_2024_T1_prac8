const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Import Routes
const projectRoute = require('./routes/projects');

//Middleware
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//Use Routes
app.use('/api/projects', projectRoute);

app.listen(port, () => {
    console.log("App Listening on port " + port);
});