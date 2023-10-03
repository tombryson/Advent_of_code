export const x = "";

const input = await Deno.readTextFile("./input.txt");

const rounds = input.split("\n");

const winner = {
    A: "Y",
    B: "Z",
    C: "X"
}
const draw = {
    A: "X",
    B: "Y",
    C: "Z"
}
const loser = {
    A: "Z",
    B: "X",
    C: "Y"
}
const shapeScore = {
    X: 1,
    Y: 2,
    Z: 3
}
const needResult {
    
}

const score = (rounds) => {
    let points = 0;
    for (let i = 0; i < rounds.length; i++) {
        let elfPlays = rounds[i][0];
        let youPlay = rounds[i][2];
        if (winner[elfPlays] === youPlay) {
            points += (6 + shapeScore[youPlay]); 
            console.log(`You Win! Points Scored: ${6 + shapeScore[youPlay]} Total Points ${points}`);
        } else if (draw[elfPlays] === youPlay) {
            points += (3 + shapeScore[youPlay]);
            console.log(`You Drew! Points Scored: ${3 + shapeScore[youPlay]} Total Points ${points}`);
        } else if (loser[elfPlays] === youPlay) {
            points += (0 + shapeScore[youPlay]);
            console.log(`You Lost! Points Scored: ${0 + shapeScore[youPlay]} Total Points ${points}`);
        }
        console.log(`total points are ${points}`);
    }
}
score(rounds);