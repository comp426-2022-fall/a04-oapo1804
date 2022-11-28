import {roll} from "./lib/roll.js";
import express from "express";
import minimist from "minimist";

const app = express()

const args = minimist(process.argv.slice(2));

args['port'];
const port = args.port || 5000

const server = app.listen(port);


app.get('/app/', (req, res) => {
    res.send('200 OK')
    res.end;
});

app.post('/app/roll/', (req, res) => {
});