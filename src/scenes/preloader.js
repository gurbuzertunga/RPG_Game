import map_pic from '../assets/img/rpg_nature_tileset.png';
import map_json from '../assets/img/map.json';

import player_pic from '../assets/img/player.png';
import player_json from '../assets/img/player_atlas.json';
import player_anim from '../assets/img/player_anim.json';
import items from '../assets/img/items.png';

import enemies_pic from '../assets/img/enemies.png';
import enemies_atlas from '../assets/img/enemies_atlas.json';
import enemies_anim from '../assets/img/enemies_anim.json';

import resources_pic from '../assets/img/resources.png';
import resources_json from '../assets/img/resources_atlas.json';

import rock_sound from '../assets/audio/rock.wav';
import bush_sound from '../assets/audio/bush.wav';
import tree_sound from '../assets/audio/tree.wav';
import troll_sound from '../assets/audio/troll.wav';
import ent_sound from '../assets/audio/ent.wav';
import bandit_sound from '../assets/audio/bandit.wav';

import pickup_sound from '../assets/audio/pickup.wav';
import background_sound from '../assets/audio/background_music.wav';
import instructions_pic from '../assets/img/instructions.png'
import play_img from '../assets/img/play.png';
import options_img from '../assets/img/options.png';
import help_img from '../assets/img/help.png';
import score_img from '../assets/img/score.png';
import quit_img from '../assets/img/quit.png';
import music_on_img from '../assets/img/music_on.png';
import music_off_img from '../assets/img/music_off.png';

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloadScene');
        
    }


    preload() {
        let percentage = this.add.text(100,175,``);
        let fileloading = this.add.text(100,190,``);
        this.load.image('tiles', map_pic);
        this.load.image('play',play_img);
        this.load.image('options',options_img);
        this.load.image('help',help_img);
        this.load.image('score',score_img);
        this.load.image('quit',quit_img);
        this.load.image('music_on',music_on_img);
        this.load.image('music_off',music_off_img);
        this.load.image('instructions',instructions_pic);
        this.load.tilemapTiledJSON('map',map_json);
        this.load.atlas('player',player_pic,player_json);
        this.load.atlas('enemies',enemies_pic,enemies_atlas);
        this.load.animation('player_anim',player_anim);
        this.load.animation('enemies_anim',enemies_anim);
        this.load.spritesheet('items',items,{frameWidth:32,frameHeight:32});
        this.load.atlas('resources',resources_pic,resources_json);
        this.load.audio('tree',tree_sound);
        this.load.audio('bush',bush_sound);
        this.load.audio('rock',rock_sound);
        this.load.audio('pickup',pickup_sound);
        this.load.audio('troll',troll_sound);
        this.load.audio('ent',ent_sound);
        this.load.audio('bandit',bandit_sound);
        this.load.audio('background',background_sound);
        this.loading = this.add.graphics();
        this.load.on('progress', progress => {
            this.loading.fillStyle(0x0000ff,1);
            this.loading.fillRect(100,150,300 * progress,25);
            percentage.setText(`${parseInt(progress * 100)}%`);
            
        });
        this.load.on('fileprogress', file => {
            fileloading.setText(file.key);
        });
        this.load.on('complete', () => {
            percentage.destroy();
            fileloading.destroy();
            this.add.text(100,175,'Loading Complete.');
        });
    };

    create() {
        this.scene.start('titleScene');
    };

}