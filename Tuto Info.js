
------code pour le bot.js:

const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.get('/', (req, res) => {
	res.json('This bot should be online! Uptimerobot will keepalive')
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);

------ package json scripts
  "scripts": {
    "start": "node bot.js"
  },



----- Installation Logs
enable-pnpm

-------- Package json
express

express-glitch-keepalive

