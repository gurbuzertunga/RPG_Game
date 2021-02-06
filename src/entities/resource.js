import resourcePic from '../assets/img/resources.png';
import resourceJson from '../assets/img/resources_atlas.json';
import rockSound from '../assets/audio/rock.wav';
import bushSound from '../assets/audio/bush.wav';
import treeSound from '../assets/audio/tree.wav';
import pickupSound from '../assets/audio/pickup.wav';
import MatterEntity from './matterEntity';

export default class Resource extends MatterEntity {
  static preload(scene) {
    scene.load.atlas('resources', resourcePic, resourceJson);
    scene.load.audio('tree', treeSound);
    scene.load.audio('bush', bushSound);
    scene.load.audio('rock', rockSound);
    scene.load.audio('pickup', pickupSound);
  }


  constructor(data) {
    const { scene, resource } = data;
    const drops = JSON.parse(resource.properties.find(p => p.name === 'drops').value);
    const depth = resource.properties.find(p => p.name === 'depth').value;
    super({
      scene, x: resource.x, y: resource.y, texture: 'resources', frame: resource.type, drops, depth, health: 5, name: resource.type,
    });

    const yOrigin = resource.properties.find(p => p.name === 'yOrigin').value;
    this.y += this.height * (yOrigin - 0.5);
    const { Bodies } = Phaser.Physics.Matter.Matter; // eslint-disable-line
    const circleCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'collider' });
    this.setExistingBody(circleCollider);
    this.setStatic(true);
    this.setOrigin(0.5, yOrigin);
  }
}