'use strict'
const dev = false; //Turn on if you want to measure the amount of time it takes for the simulation to run.;

const minigame = require("./minigame")
if (dev) { const now = require('performance-now') }

function simulate(x) {
    console.log('Program has started...please wait...')
    let p1WinCount = 0;
    let p2WinCount = 0;
    let p3WinCount = 0;
    let p4WinCount = 0;
    if (dev) { const start = now() }
    for (let i = 0; i < x; i++) {
        let res = minigame()
        if (res === 1) {
            p1WinCount++
        }
        else if (res === 2) {
            p2WinCount++
        }
        else if (res === 3) {
            p3WinCount++
        }
        else if (res === 4) {
            p4WinCount++
        }
        else {
            throw new error("Something broke. The player that won wasn't even playing. This line of code should never execute.")
        }
    }
    if (dev) { const end = now() }
    console.log(`The minigame was played a total of ${x} time(s).`)
    console.log(`Player 1 won ${p1WinCount} time(s). That's a ${((p1WinCount / x) * 100).toPrecision(4)}% winrate!`)
    console.log(`Player 2 won ${p2WinCount} time(s). That's a ${((p2WinCount / x) * 100).toPrecision(4)}% winrate!`)
    console.log(`Player 3 won ${p3WinCount} time(s). That's a ${((p3WinCount / x) * 100).toPrecision(4)}% winrate!`)
    console.log(`Player 4 won ${p4WinCount} time(s). That's a ${((p4WinCount / x) * 100).toPrecision(4)}% winrate!`)
    if (dev) { console.log(`Simulation took ${(end - start) / 1000} seconds to run.`) }
}

simulate(550000);