# Bowsers Big Blast Simulator, from the Mario Party Series
## Created by Andrew Jessen-Tyler
## Original Minigame by Nintendo and Hudson Soft

## Background Information
* [Mario Party Series Wikipedia Page](https://en.wikipedia.org/wiki/Mario_Party)
* [Bowser's Big Blast Minigame on Mario Wiki](https://www.mariowiki.com/Bowser%27s_Big_Blast)
* [Bowser's Big Blast In Action](https://www.youtube.com/watch?v=UMwySRHX5tU)

### Backstory
After making a mass simulator for Mario Party 4's "Hide and Go Boom" minigame, the next natural step was to do one for probably the most popular chance based minigame in the Mario Party series, Bowser's Big Blast. This minigame has appeared in Mario Party 2, Mario Party the Top 100, and Mario Party 4 (my personal favorite) under the name Bowser's Bigger Blast. Assuming each Mario Party engine uses RNG in this game properly, does player order actually make a difference? Does the first person to go have an advantage, or does the second? Sure there are varying chances in each turn, but I mean overall. So, I made this mass simulator to put it to the test.

### How to Use
Use the 'npm start' script to run the program. You may adjust the amount of simulations for more or less precision. For reference, on my system, 550 thousand simulations takes about 1 second.

### Conclusion
For my results, I ran the minigame 33 million times. Unexpectedly, it turns out this is probably the most fair Mario Party minigame of all time. I would have expected one of the player slots to have a slight advantage or disadvantage. But, from start to finish, each of the four players has a 25% winrate. So this is by far the best (or tied for the best) 4 player chance based minigame in the entire Mario Party series.


##### License
MIT License

Copyright (c) 2020 Andrew Jessen-Tyler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
