//Returns either 1, 2, 3, or 4 based on which player won the minigame
//Console.logs are commented out due to the main program running the simulation millions of times. But if you want to see the minigame go down in a single simulation, feel free to uncomment them temporarily.
'use strict';

module.exports = function minigame() {

    let activePlayers = [1, 2, 3, 4]
    while (activePlayers.length !== 1) { //This mass while loop stays running until 1 player is left, thus finishing the minigame.
        let switchcount = activePlayers.length + 1; //When the switches spawn, there is always 1 more than the total amount of remaining players.
        let bombswitch = Math.floor(Math.random() * switchcount) //Randomly picks a switch that when chosen will detonate the bomb and eliminate the player who chose it.
        let bombswitchdetonated = false;
        //Setting up the switches...
        let activeswitches = []
        for (let i = 0; i < switchcount; i++) {
            activeswitches.push(i)
        }
        //console.log(`The active switches are ${activeswitches}.`)
        while (bombswitchdetonated === false) { //This while loop runs until the the bomb switch is the only one left or it is detonated.
            let currentplayer = activePlayers[0]
            let switchpicked = Math.floor(Math.random() * activeswitches.length) //Choses a random switch for the current player.
            //console.log(`Player ${currentplayer} picked switch number ${activeswitches[switchpicked]}.`)
            if (activeswitches[switchpicked] === bombswitch) {
                //console.log(`Player ${currentplayer} detonated the bomb!`)
                activePlayers = activePlayers.filter(player => player !== currentplayer) //Eliminates the current player from the game
                bombswitchdetonated = true; //Breaks the while loop, allowing the arena to reset.
            }
            else {
                //console.log('The switch was a dud!')
                //rotate currentplayer to back of line
                activePlayers = activePlayers.filter(player => player !== currentplayer)
                activePlayers.push(currentplayer)
                //remove switch picked from active switches
                activeswitches = activeswitches.filter(s => s !== activeswitches[switchpicked])
                if (activeswitches.length === 1) {
                    bombswitchdetonated = true; //Not actually detonated, but used to reset the arena, since the only switch left would be the bombswitch. This allows the game to reset the active switch count;
                    //console.log('The switches have been reset!')
                }
            }
        }
    }
    //console.log(`Player ${activePlayers[0]} wins!`)
    return activePlayers[0]

}