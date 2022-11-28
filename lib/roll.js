#!/usr/bin/env node
import minimist from 'minimist';
export function roll(sides, dice, rolls) {
    var vals = [];
    for(var i = 0; i < rolls; i++){
        vals.push(0);
        for(var j = 0; j<dice; j++){
            vals[i] += Math.floor(Math.random()*sides)+1;
        }
        
    }
    return { sides: parseInt(sides),
         dice: parseInt(dice), 
         rolls: parseInt(rolls), 
         results: vals }

}