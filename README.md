# BattleShip

Live Preview: https://revan20911.github.io/Battleship/

### This is a rendition of the classic BattleShip board game developed using Vanilla.js, HTML, and CSS. 


![Screenshot 2022-08-21 at 11-08-30 Battleship](https://user-images.githubusercontent.com/47538097/185800467-52df5d6b-c35e-40b4-b278-9ddc841c88bf.png)



## Gameplay 

The objective of the game is the same as the original. Each player takes turns attempting to fire upon and hit their opponent's ships through the fog of war. The player who destroys all of their opponent's ships first is declared the winner. 

![Screenshot 2022-08-21 at 11-09-05 Battleship](https://user-images.githubusercontent.com/47538097/185800560-715c1e07-dd0e-4245-b895-0ad0ac347594.png)


## Functionality

The game involves a human player and a CPU opponent. Currently the CPU uses randomization to select a cell to fire on. In the future I may implement a ML algorithm to allow the AI to better choose which spaces to fire upon based on proximity of a confirmed hit. 

Once the score of either reaches 17 the winner is declared and the game is ended. 



This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application
