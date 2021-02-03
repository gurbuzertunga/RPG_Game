import resources_pic from '../assets/img/resources.png';
import resources_json from '../assets/img/resources_atlas.json';
import rock_sound from '../assets/audio/rock.wav';
import bush_sound from '../assets/audio/bush.wav';
import tree_sound from '../assets/audio/tree.wav';
import pickup_sound from '../assets/audio/pickup.wav';
import DropItem from './dropItem.js';

export default class Resource extends Phaser.Physics.Matter.Sprite {
    
    static preload(scene) {
        scene.load.atlas('resources',resources_pic,resources_json);
        scene.load.audio('tree',tree_sound);
        scene.load.audio('bush',bush_sound);
        scene.load.audio('rock',rock_sound);
        scene.load.audio('pickup',pickup_sound);
    }
    

    constructor(data) {
        let {scene,resource} = data;
        super(scene.matter.world,resource.x,resource.y,'resources',resource.type);
        this.scene.add.existing(this);
        this.name = resource.type;
        this.health = 5;
        this.sound = this.scene.sound.add(this.name);
        let yOrigin = resource.properties.find(p=>p.name == 'yOrigin').value;
        this.drops = JSON.parse(resource.properties.find(p=>p.name=='drops').value);
        this.x += this.width / 2;
        this.y -= this.height / 2;
        this.y = this.y + this.height * (yOrigin - 0.5);
        const {Body,Bodies} = Phaser.Physics.Matter.Matter;
        var circleCollider = Bodies.circle(this.x,this.y,12,{isSensor:false,label:'collider'});
        this.setExistingBody(circleCollider);
        this.setStatic(true);
        this.setOrigin(0.5,yOrigin);
    }
    
    get dead() {
        return this.health <= 0;
    }

    hit() {
        if (this.sound) this.sound.play();
        this.health--;
        console.log(`Hitting ${this.name}, Health: ${this.health}`);
        if (this.dead) {
            this.drops.forEach(drop => new DropItem({scene:this.scene,x:this.x,y:this.y,frame:drop}));
        }
    }

}