import resources_pic from '../assets/img/resources.png';
import resources_json from '../assets/img/resources_atlas.json';
import rock_sound from '../assets/audio/rock.wav';
import bush_sound from '../assets/audio/bush.wav';
import tree_sound from '../assets/audio/tree.wav';
import pickup_sound from '../assets/audio/pickup.wav';
import MatterEntity from './matterEntity';

export default class Resource extends MatterEntity {
    
    static preload(scene) {
        scene.load.atlas('resources',resources_pic,resources_json);
        scene.load.audio('tree',tree_sound);
        scene.load.audio('bush',bush_sound);
        scene.load.audio('rock',rock_sound);
        scene.load.audio('pickup',pickup_sound);
    }
    

    constructor(data) {
        let {scene,resource} = data;
        // super(scene.matter.world,resource.x,resource.y,'resources',resource.type);
        let drops = JSON.parse(resource.properties.find(p=>p.name=='drops').value);
        let depth = resource.properties.find(p=>p.name=='depth').value;
        super({scene,x:resource.x,y:resource.y,texture:'resources',frame:resource.type,drops,depth,health:5,name:resource.type})
        
        let yOrigin = resource.properties.find(p=>p.name == 'yOrigin').value;
        this.y = this.y + this.height * (yOrigin - 0.5);
        const {Bodies} = Phaser.Physics.Matter.Matter;
        var circleCollider = Bodies.circle(this.x,this.y,12,{isSensor:false,label:'collider'});
        this.setExistingBody(circleCollider);
        this.setStatic(true);
        this.setOrigin(0.5,yOrigin);
    }

}