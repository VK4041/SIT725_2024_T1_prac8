const { getCollection } = require('../dBConnection');

async function Retrieve() {
    const collection = await getCollection(); //remove this if error
    const result = await collection.find().toArray();
    console.log("Fetched Data: ", result);
    return result;
}

async function Create(formData) {
    const collection = await getCollection(); //remove this if error
    console.log(formData);
    const city = {
        title: formData.title,
        path: formData.path,
        description: formData.description
    };
    const result = await collection.insertOne(city);
    console.log("Posted Data: ", result);
}

module.exports = {
    Retrieve,
    Create
};