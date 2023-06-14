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


