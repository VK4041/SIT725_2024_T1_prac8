// const { getCollection } = require('../dBConnection');
const model = require('../model/cities');
const renHtml = async (req, res) => {
    res.render('index.html');
};

const getProject = async (req, res) => {
    try {
        const result = await model.Retrieve();
        res.json({
            statusCode: 200,
            data: result,
            message: "Get all cards success"
        });
    } catch (error) {
        console.error("Error while fetching data:", error);
        res.status(500).json({
            statusCode: 500,
            message: "Internal server error"
        });
    }
};

const createProject = async (req, res) => {
    try {
        await model.Create(req.body);
        res.json({
            statusCode: 200,
            message: "Post City Success",
        });
    } catch (error) {
        console.error("Error while creating city:", error);
        res.status(500).json({
            statusCode: 500,
            message: "Internal server error"
        });
    }
};

module.exports = {
    createProject,
    getProject,
    renHtml
};
