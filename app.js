'use strict'
const minigame = require("./minigame")

function simulate(x) {
    for (let i = 0; i < x; i++) {
        let res = minigame()
        console.log(`Player ${res} won!`)
    }
}

simulate (100000);