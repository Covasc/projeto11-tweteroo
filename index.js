import express, { request, response } from 'express';

const server = express();
server.use(express.json());

const userList = [];
const tweets = [];

server.post('/sign-up', (request, response) => {
    const user = request.body;
    userList.push(user);
    console.log('OK');
});

server.post('/tweets', (request, response) => {
    const { username, tweet } = request.body;
    let userTweet = {};
    userList.map( (user) => {
        if (user.username === username) {
            userTweet = { username: username, tweet: tweet, image: user.avatar}
        }
    })
    tweets.push(userTweet);
    console.log('OK');
});

server.get('tweets', (request, response) => {
    const { username, tweet } = request.body;

});

server.listen(6000);