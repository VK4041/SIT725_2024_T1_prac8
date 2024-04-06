const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// CardList array of objects
let cardList = [
    {
        title: "Melbourne City",
        image: "./images/melb.png",
        description: `Food capital of Australia. Filled with beautiful scenaries and a
        spectacular city with sky-scrapers and wonderful beaches. A must visit in my book!`,
        // Image sourced from vector stock
        link: "https://www.vectorstock.com/",
        linkText: "Visit Melbourne"
    },
    {
        title: "Sydney City",
        image: "./images/syd.png",
        description: `The capital of The Australian State of New South Wales. Sydney is popular tourist destination famous for its harbour and Opera House.`,
        // Image sourced from vector stock
        link: "https://www.vectorstock.com/",
        linkText: "Visit Sydney"
    },
    {
        title: "Brisbane City",
        image: "./images/bris.png",
        description: `The capital of Queensland is situated on the Brisbane River. Famous for its vast and open parklands, lookouts and local markets.`,
        // Image sourced from vector stock
        link: "https://www.vectorstock.com/",
        linkText: "Visit Brisbane"
    }
]
app.get('/api/cities', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: 'Success' });
});

app.listen(port, () => {
    console.log("App Listening on port " + port);
});