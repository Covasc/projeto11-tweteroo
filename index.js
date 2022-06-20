import express, { request, response } from 'express';

const server = express();
server.use(express.json());

const userList = [];
const tweets = [];

// CRIEI ESSAS FUNÇÕES PARA FAZER A VALIDAÇÃO BONUS, NÃO SOUBE USAR DIREITO O REGEXP, AMANHÃ TIRAMOS ESTA DUVIDA
// function URLValidate (string) {
//     let re = RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
//     if (re.test(string) === false) {
//         return (false);
//     } else {
//         return (true);
//     };
// };

// function isEmpty (string) {
//     if (string === "") {
//         return (false);
//     } else {
//         return (true);
//     };
// };

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
    response.status(201).send('OK');    
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
    response.status(201).send('OK');
});

server.get('/tweets', (request, response) => {
    response.send(tweetsOrganize());
});

server.listen(6000, () => {
    console.log('Rodando');
});