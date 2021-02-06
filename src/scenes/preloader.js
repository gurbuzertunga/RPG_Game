import mapPic from '../assets/img/rpg_nature_tileset.png';
import mapJson from '../assets/img/map.json';

import playerPic from '../assets/img/player.png';
import playerJson from '../assets/img/player_atlas.json';
import playerAnim from '../assets/img/player_anim.json';
import items from '../assets/img/items.png';

import enemiesPic from '../assets/img/enemies.png';
import enemiesAtlas from '../assets/img/enemies_atlas.json';
import enemiesAnim from '../assets/img/enemies_anim.json';

import resourcesPic from '../assets/img/resources.png';
import resourcesJson from '../assets/img/resources_atlas.json';

import rockSound from '../assets/audio/rock.wav';
import bushSound from '../assets/audio/bush.wav';
import treeSound from '../assets/audio/tree.wav';
import trollSound from '../assets/audio/troll.wav';
import entSound from '../assets/audio/ent.wav';
import banditSound from '../assets/audio/bandit.wav';

import pickupSound from '../assets/audio/pickup.wav';
import backgroundSound from '../assets/audio/background_music.wav';
import instructionsPic from '../assets/img/instructions.png';
import playImg from '../assets/img/play.png';
import optionsImg from '../assets/img/options.png';
import helpImg from '../assets/img/help.png';
import scoreImg from '../assets/img/score.png';
import quitImg from '../assets/img/quit.png';
import musicOnImg from '../assets/img/music_on.png';
import musicOffImg from '../assets/img/music_off.png';

export default class Preloader extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('preloadScene');
  }


  preload() {
    const percentage = this.add.text(100, 175, '');
    const fileloading = this.add.text(100, 190, '');
    this.load.image('tiles', mapPic);
    this.load.image('play', playImg);
    this.load.image('options', optionsImg);
    this.load.image('help', helpImg);
    this.load.image('score', scoreImg);
    this.load.image('quit', quitImg);
    this.load.image('music_on', musicOnImg);
    this.load.image('music_off', musicOffImg);
    this.load.image('instructions', instructionsPic);
    this.load.tilemapTiledJSON('map', mapJson);
    this.load.atlas('player', playerPic, playerJson);
    this.load.atlas('enemies', enemiesPic, enemiesAtlas);
    this.load.animation('player_anim', playerAnim);
    this.load.animation('enemies_anim', enemiesAnim);
    this.load.spritesheet('items', items, { frameWidth: 32, frameHeight: 32 });
    this.load.atlas('resources', resourcesPic, resourcesJson);
    this.load.audio('tree', treeSound);
    this.load.audio('bush', bushSound);
    this.load.audio('rock', rockSound);
    this.load.audio('pickup', pickupSound);
    this.load.audio('troll', trollSound);
    this.load.audio('ent', entSound);
    this.load.audio('bandit', banditSound);
    this.load.audio('background', backgroundSound);
    this.loading = this.add.graphics();
    this.load.on('progress', progress => {
      this.loading.fillStyle(0x0000ff, 1);
      this.loading.fillRect(100, 150, 300 * progress, 25);
      percentage.setText(`${parseInt(progress * 100)}%`); // eslint-disable-line
    });
    this.load.on('fileprogress', file => {
      fileloading.setText(file.key);
    });
    this.load.on('complete', () => {
      percentage.destroy();
      fileloading.destroy();
      this.add.text(100, 175, 'Loading Complete.');
    });
  }

  create() {
    this.scene.start('titleScene');
  }
}