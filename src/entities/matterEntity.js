import DropItem from './dropItem';

export default class MatterEntity extends Phaser.Physics.Matter.Sprite { // eslint-disable-line
  constructor(data) {
    const {
      name, scene, x, y, health, drops, texture, frame, depth,
    } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.x += this.width / 2;
    this.y -= this.height / 2;
    this.depth = depth || 1;
    this.name = name;
    this.health = health;
    this.drops = drops;
    this._position = new Phaser.Math.Vector2(this.x, this.y); // eslint-disable-line
    if (this.name) this.sound = this.scene.sound.add(this.name);
    this.scene.add.existing(this);
  }

  get position() {
    this._position.set(this.x, this.y); // eslint-disable-line
    return this._position; // eslint-disable-line
  }

  get velocity() {
    return this.body.velocity;
  }

  get dead() {
    return this.health <= 0;
  }

  onDeath() {} // eslint-disable-line

  hit() {
    if (this.sound) this.sound.play();
    this.health -= 1;
    if (this.dead) {
      this.onDeath();
      this.drops.forEach(drop => new DropItem({
        scene: this.scene, x: this.x, y: this.y, frame: drop,
      }));
    }
  }
}