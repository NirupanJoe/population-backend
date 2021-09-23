const express = require('express');
const populationRouter = require('./router/populationRouter');

const app = express();
const port = 5500;

app.use(express.urlencoded());
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/population", populationRouter);
app.listen(port, () => console.log(`running on ${ port }`));