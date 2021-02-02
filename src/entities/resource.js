import resources_pic from '../assets/img/resources.png';
import resources_json from '../assets/img/resources_atlas.json';

export default class Resource extends Phaser.Physics.Matter.Sprite {
    
    static preload(scene) {
        scene.load.atlas('resources',resources_pic,resources_json);
    }

    constructor(data) {
        let {scene,resource} = data;
        super(scene.matter.world,resource.x,resource.y,'resources',resource.type);
        this.scene.add.existing(this);

        let yOrigin = resource.properties.find(p=>p.name == 'yOrigin').value;
        this.x += this.width / 2;
        this.y -= this.height / 2;
        this.y = this.y + this.height * (yOrigin - 0.5);
        const {Body,Bodies} = Phaser.Physics.Matter.Matter;
        var circleCollider = Bodies.circle(this.x,this.y,12,{isSensor:false,label:'collider'});
        this.setExistingBody(circleCollider);
        this.setStatic(true);
        this.setOrigin(0.5,yOrigin);
    }

}