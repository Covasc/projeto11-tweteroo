import express from 'express';

const server = express();
server.use(express.json());

const userList = [];
const tweets = [];

server.listen(6000);