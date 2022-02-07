A repo for my code following Chris Perko's YouTube tutorial playlist [Intro to Game Development with JavaScript](https://www.youtube.com/playlist?list=PLht-7jHewMA6Wywk_bk0RnD4OvHZ5qL2c)

I'm adding some notes and thoughts as comments on the file as I go through the tutorial.

Some changes/additions I've made:
- Although it worked anyway in the tutorial video (possibly due to the difference in IDE), when I initially tried importing modules into the `index.js` file, they didn't load and I got an error in the console; after looking up the error message, I realised I need to include the file extension in the import statement for it to work (i.e. `import Game from "./game.js";` instead of `from "./game"`).
- Similarly, I realised I had to add `type="module"` to the HTML script tag since I was using import/export statements.
- Due to using modules, opening the HTML file in a browser resulted in the scripts not loading, and a console error message stating that it was blocked due to CORS policy, which meant that it would need a server to work; as I did not need a back-end for this project (at least not that I can tell so far), I used VS Code's Live Server extension to view the HTML file instead.
- In the collision detection between the ball in paddle (in the `update` function within the ball class), I added the `leftOfBall` and `rightOfBall` variables and used them within the x-axis conditionals, to make sure that if the right side of the ball lands on the paddle, a collision is still detected even if the left edge is off the paddle.