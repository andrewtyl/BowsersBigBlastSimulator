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
    console.log(`The active switches are ${activeswitches}.`)
    while (bombswitchdetonated === false) {
        let currentplayer = activePlayers[0]
        let switchpicked = Math.floor(Math.random() * activeswitches.length)
        console.log(`Player ${currentplayer} picked switch number ${switchpicked}.`)
        if (switchpicked === bombswitch) {
            console.log(`Player ${currentplayer} detonated the bomb!`)
            activePlayers = activePlayers.filter(player => player !== currentplayer)
            bombswitchdetonated = true;
        }
        else {
            console.log('The switch was a dud!')
            //rotate currentplayer to back of line
            activePlayers = activePlayers.filter(player => player !== currentplayer)
            activePlayers.push(currentplayer)
            //remove switch picked from active switches
            activeswitches = activeswitches.filter(s => s !== switchpicked)
            if (activeswitches.length === 1) {
                bombswitchdetonated = true; //Not actually detonated, but used to reset the arena, since the only switch left would be the bombswitch. This allows the game to reset the active switch count;
                console.log('The switches have been reset!')
            }
        }
    }
}
console.log(`Player ${activePlayers[0]} wins!`)
return activePlayers[0]