import express, { request, response } from 'express';

const server = express();
server.use(express.json());

const userList = [];
const tweets = [];

function tweetsOrganize () {
    let organizedList = []; 
    if (tweets.length <= 10) {
        for (let i = (tweets.length - 1); i > -1; i--) {
            organizedList.push(tweets[i]);
        }
        return (organizedList);
    } else {
        for (let i = (tweets.length - 1); i> (tweets.length - 11); i--) {
            organizedList.push(tweets[i]);
        }
        return (organizedList);
    }
}

server.post('/sign-up', (request, response) => {
    const user = request.body;
    userList.push(user);
    response.send('OK');
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
    response.send('OK');
});

server.get('/tweets', (request, response) => {
    response.send(tweetsOrganize());
});

server.listen(6000, () => {
    console.log('Rodando');
});