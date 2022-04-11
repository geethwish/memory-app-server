const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');

const postsRoute = require('./routes/posts')

const app = express();

app.use(cors());

app.use('/posts', postsRoute);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));


const CONNECTION_URL = 'mongodb+srv://geeth:geeth@cluster0.id93r.mongodb.net/memory_app?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

    }).catch((error) => {

        console.log(error.message);
    });
