const express = require('express');
const app = express();
const port = 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://VarunVK:Varun%40Mongo@sit725.ml9nzrr.mongodb.net/?retryWrites=true&w=majority&appName=SIT725"
let collection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//MongoDB Connection
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        collection = client.db('City_Database').collection('Cities');
        console.log(collection);
    } catch (ex) {
        console.error("Error found at MongoDB connection: " + ex);
    }
}

//Routing GET and POST

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/api/cities', async (req, res) => {
    const result = await collection.find().toArray();
    console.log("Fetched Data: ", result);

    res.json({
        statusCode: 200,
        data: result,
        message: "Get all cards success"
    }
    );
});

app.post('/api/cities', async (req, res) => {
    console.log(req.body);
    const city = { title: req.body.title, path: req.body.path, description: req.body.description };
    const result = await collection.insertOne(city);
    console.log("Posted Data: ", result);
    res.json({
        statusCode: 200,
        message: "Post City Success",
    });

});

app.listen(port, async () => {
    console.log("App Listening on port " + port);
    await runDBConnection();
});