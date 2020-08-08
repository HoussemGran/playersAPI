const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const playerRouter = require('./routers/playerRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req , res)=>{
    res.send('<h1> Players Api </h1>');
});

app.use('/player',playerRouter);

app.listen(3000,()=>{
    console.log('server is on port 3000');
});