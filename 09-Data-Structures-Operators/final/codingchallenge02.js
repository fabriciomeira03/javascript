'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',

        ],
    ],

score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 0th, 2037',
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};


//1. destructured in "i" of index and then "player". the word 'entries' will give us the properties.
for(const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`); //${i + 1} means it will start with goal number one.


//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
    average /= odds.length;
console.log(average);

//3. 
for (const [team, odd] of Object.entries(game.odds))
    {
        console.log(team, odd);
        const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
        console.log(`Odd of ${teamStr} ${odd}`);
    }


//note: in the array [] we use the .entries (game.scored.entries) to get the entries of the array.
//but in the object we have to use 'Object.entries(game.odds)' AND THEN pass into the function the object we're interested in. 
// ----- that's a fundamental difference we need be aware of ------



// ------------- CODING CHALLENGE 03 --------------------------

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ]);


//1. create an array with the unique events
console.log(gameEvents.values());
//const events = new Set (gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);


//2.
gameEvents.delete(64);


//3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()];
console.log(time);


//4.
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[HALF] ${min}: ${event}`);
}



// -------- CODING CHALLENGE 04 -----------

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').valueOf;

document.querySelector('button').addEventListener('click', function () {
    
    const text = document.querySelector('textarea').value;
    console.log(text);
    const rows = text.split('\n');
    console.log(rows);

for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    
    const output = `${first} ${second.replace(second[0], second[0].toUpperCase)}`;
    console.log(output.ppadEnd(20, '@'));
}

});


