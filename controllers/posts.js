const PostMessage = require('../models/postMessage')

const getPosts = async (req, res) => {

    try {

        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);


    } catch (error) {

        res.status(404).json({ message: error.message });

    }

}

const createPost = (req, res) => {
    res.send("created")
}

module.exports = {
    getPosts,
    createPost
}