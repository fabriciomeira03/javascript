//My answer:

const koalas = (88+91+110) / 3
const dolphins = (96+108+89) / 3

const koalasRound2 = (109+95+123) / 3;
const dolphinsRound2 = (97+112+101) / 3;

const koalasRound3 = (109+95+106) / 3;
const dolphinsRound3 = (97+112+101) /3;


//ROUND 1

if (koalas > dolphins) {
    console.log('Round 1 Koalas were the winners');
} else if (dolphins > koalas) {
    console.log('Round 1 Dolphins was the winner');
}



//Professors answer:

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`);
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolhins === scoreKoalas) {
    console.log("Nobody wins. It's a draw");
} 



// && significa "e"
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {

}
