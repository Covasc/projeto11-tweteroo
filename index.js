import express, { request } from 'express';

const server = express();
server.use(express.json());

const userList = [];
const tweets = [];

server.post('/sign-up', (request, response) => {
    const user = request.body;
    userList.push(user);
    console.log('OK');
})

server.listen(6000);