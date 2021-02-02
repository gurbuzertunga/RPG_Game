import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';

import map_pic from '../assets/img/rpg_nature_tileset.png';
import map_json from '../assets/img/map.json';

import Player from '../entities/player.js';
import Resource from '../entities/resource.js';

export default class mainScene extends Phaser.Scene {
    constructor() {
        super('mainScene');
    }

    preload() {
       Player.preload(this);
       Resource.preload(this);
       this.load.image('tiles', map_pic);
       this.load.tilemapTiledJSON('map',map_json);
       
    }

    create() {
        //create  layered tile map
        const map = this.make.tilemap({key: 'map'});  
        this.map = map;  
        const tileset = map.addTilesetImage('rpg_nature_tileset', 'tiles',32,32,0,0);
        const layer1 = map.createStaticLayer('Tile Layer 1',tileset,0,0);
        const layer2 = map.createStaticLayer('Tile Layer 2',tileset,0,0);
        layer1.setCollisionByProperty({collides:true});
        this.matter.world.convertTilemapLayer(layer1);
        // map objects
       this.map.getObjectLayer('Resources').objects.forEach(resource => new Resource({scene:this,resource}));
        //add player to scene
        this.player = new Player({scene:this,x:150,y:150,texture:'player',frame:'eliteknight_idle_1'});
        //player movement
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.A,
        })
    }

   update() {
       this.player.update();
   }
}