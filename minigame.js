//Returns either 1, 2, 3, or 4 based on which player won the minigame

let activePlayers = [1, 2, 3, 4]
while (activePlayers.length !== 1) {
    let switchcount = activePlayers.length + 1;
    let bombswitch = Math.floor(Math.random() * switchcount)
    let bombswitchdetonated = false;
    let activeswitches = []
    for (let i = 0; i < switchcount; i++) {
        activeswitches.push(i)
    }
    console.log(activeswitches)
    while (bombswitchdetonated === false) {
        let currentplayer = activePlayers[0]
        let switchpicked = Math.floor(Math.random() * switchcount)
        if (switchpicked === bombswitch) {
            //remove currentPlayer from active players
            //restart with 3 players
            bombswitchdetonated = true;
        }
        else {
            //rotate currentplayer to back of line
            //remove switch picked from active switches
            if (activeswitches.length === 1) {
                bombswitchdetonated = true; //Not actually detonated, but used to reset the arena, since the only switch left would be the bombswitch. This allows the game to reset the active switch count;
            }
        }
    }
}
console.log(`Player ${activePlayers[0]} wins!`)
return activePlayers[0]