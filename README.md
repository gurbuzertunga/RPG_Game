# Phaser 3 RPG Game

Here I created an RPG Game Using Webpack, ES6, JS and Phaser. In Phaser as Engine I used Matterjs.

## About the Game

The Game is about a lonely knight that fell into an island in which there are some Trolls and Ents. End Game Boss is a bandit with 100 health.(Each hit of your axe takes away only 1 health) If you can actually kill the boss bandit congrats, you have way too much free time on your hands and maybe you should do something better with your life. Try learning coding for example.

Gameplay is Extremely simple. You move around with WASD(W-Move up,A-Move left,S-Move down,D-Move Right) keys as usual and left click to swing your axe. Try to get as much point as you can, before you die.

Good Luck!

## Live-Demo

[RPG-Game](https://rpg-game-phaser.netlify.app)

#### Game Design Implementaion
Most of the design concepts were implemented in this respository. However, some design concepts are still pending and these include:
- Using a different game character for the second scene to show better health.
- Character being able to pick animated coins in the second play scene of the game.
- Stopping the up counter when game is ended.
- Having a dynamic scoreboard that moves alongside the camera in the second game play scene.
- More real sprite animations.
- Animated obstacles in the second game play scene.

#### You can see a detailed Game Design Document [here](https://docs.google.com/document/d/1_ZASoaRodW9ONdF9bFRhUwJ9-UGhDQM425nmVNdIc1g/edit?usp=sharing)

## How to play:

**Getting Started**

1. one user can either play the game online by clicking [here](https://rpg-game-phaser.netlify.app)
  **OR**
   Clone from the git [here](https://github.com/gurbuzertunga/RPG_Game), the process of cloning are 
   
**Scene-title:**

![Title Screen](/readmeScreenshots/titlescreeen.png)

1. User can see three options: Play, Help and Score.
2. Play Option: Leads to game screen where before user is prompted to enter a username which will be used to list on leaderboard scene.
3. Help Option: Includes a how to play screen.
4. Score Option: Has a list of Top Ten players with the highest scores.

**Scene-main:**

![Play Screen](/readmeScreenshots/gamescreen.png)

1. User can see a character/avatar on the screen at this point, which has a weapon(battle axe).
2. The avatar/character will die if one of the enemies get to hit tha character a certain amont of times(user has 5 health).
3. There are three different enemy types;
    Ent: Has 8 health and will drop a random loot,
    Troll: Has 10 health and will drop a random loot,
    Bandit: Has 5 health and will drop a random loot,
4. There are three different resorce types;
    Tree: will drop logs,
    Bush: will drop berries,
    Rock: You can guess what it will drop on this one.
5. To get a score the avatar/character has to either kill an enemy or collect resources.
6. The avatar/character can move around with WASD keys and swing it's Might Battle Axe with Left Click on Mouse.
7. If the avatar/character died , then the Scene Title will reload.

## Video description:
[Video-explanation](https://www.loom.com/share/1b9c1b0a701542699499e34e66564c18)

## Technologies used

* JavaScript
* Phaser 3
* MatterJS Physics Engine
* Tiled
* Webpack
* Eslint
* Babel
* Jest in the tests
* Github
* [Netlify](https://app.netlify.com/) for the deployment
* [Leaderboard API service][LB-API] for the leaderboard

## Downloading from git and running in local machine:

**Prerequisites:**

**Available Commands**

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

**To get this project set up on your local machine, follow these simple steps:**

1. Open Terminal.
2. Navigate to your desired location to download the contents of this repository.
3. Copy and paste the following code into the Terminal: git clone https://github.com/gurbuzertunga/RPG_Game.git
4. Run "npm install".
5. Run "npm start".
6. Open, in your browser, 'localhost:8080'.

**For running the test cases:**
1. Run "npm run test".

**Now You can start playing and enjoy.**

## Author Details::

## ✒️  Authors <a name = "author"></a>

👤 **Gürbüz Ertunga**
- Github: [@gurbuzertunga](https://github.com/gurbuzertunga)
- Twitter: [@dantewuhu](https://twitter.com/dantewuhu)
- Linkedin: [GurbuzErtunga](https://www.linkedin.com/in/gurbuz-ertunga-a607a2a5/)

## Show your support

Give ⭐ Star me on GitHub — it helps!

## 📝 License

This project is [MIT](lic.url) licensed.


## :clap: Acknowledgements

- [SuperDark for Game Assets](https://superdark.itch.io/enchanted-forest-characters) <br />
- [Shikashi for Icon Packs](https://cheekyinkling.itch.io/shikashis-fantasy-icons-pack) <br />
- [Scanndroid for Background Music](https://www.youtube.com/watch?v=MkgR0SxmMKo) <br />

