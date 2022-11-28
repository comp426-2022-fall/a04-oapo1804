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

app.get('/app/roll/', (req, res) => {
    const sides =6;
    const dice = 2;
    const rolls =1;
    res.send(roll(sides, dice, rolls));
    res.end;
});


app.post('/app/roll/', (req, res) => {
    const sides = req.body.sides ||6;
    const dice = req.body.dice||2;
    const rolls = req.body.rolls||1;
    res.send(roll(sides, dice, rolls));
    res.end;
});

app.get('/app/roll/:sides/', (req, res)=> {
    const sides = req.params.sides;
    res.send(roll(sides, 2, 1))
    res.end
})

app.get('/app/roll/:sides/:dice/', (req, res)=> {
    const sides = req.params.sides;
    const dice = req.params.dice;
    res.send(roll(sides, dice, 1));
    res.end
})

app.get('/app/roll/:sides/:dice/:rolls', (req, res)=> {
    const sides = req.params.sides;
    const dice = req.params.dice;
    const rolls = req.params.rolls
    res.send(roll(sides, dice, rolls));
    res.end
})


