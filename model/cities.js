const { getCollection } = require('../dBConnection');

async function Retrieve() {
    const collection = await getCollection(); //remove this if error
    const result = await collection.find().toArray();
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
}

module.exports = {
    Retrieve,
    Create
};