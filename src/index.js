import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';
import mainScene from './scenes/mainScene.js';
import Preloader from './scenes/preloader.js';
import Title from './scenes/title.js';

const config = {
    type: Phaser.AUTO,
    parent: 'container',
    width: 512,
    height: 512,
    backgroundColor: '#333333',
    scene: [Preloader,Title,mainScene],
    scale: {
        zoom:2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug:false,
            gravity:{y:0}
        }
    },
    plugins: {
        scene:[
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision',
            }
        ]
    }
};

const game = new Phaser.Game(config);
