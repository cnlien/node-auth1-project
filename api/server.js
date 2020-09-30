const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('../database/users/userRouter')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', userRouter)

server.get('/', (req, res) => {
    res.json({
        message: "The API is running"
    })
})

module.exports = server;