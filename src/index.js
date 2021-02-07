import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';
import GetUserName from './scenes/getUserName';
import Leaderboard from './scenes/leaderBoardScene';
import mainScene from './scenes/mainScene';
import Preloader from './scenes/preloader';
import helpScene from './scenes/help';
import Title from './scenes/title';

const config = {
  type: Phaser.AUTO,
  parent: 'container',
  width: 512,
  height: 512,
  dom: { createContainer: true },
  backgroundColor: '#999999',
  scene: [Preloader, Title, Leaderboard, mainScene, GetUserName, helpScene],
  scale: {
    zoom: 1,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision',
      },
    ],
  },
};

const game = new Phaser.Game(config); // eslint-disable-line
