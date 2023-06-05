'use strict';

const games = {
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


//1. 
const [players1, players2] = games.players //p1 & p2 are the result of destructuring 'game.players'. result is TWO array's (side by side) with all elements
console.log(players1, players2);



//2. 
//whenever we hear "remaining" we need to remember the 'rest' syntax which is [...name];
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);


//3. with this syntax we get ONE array with all 22 elements (p01 & p02)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. 
