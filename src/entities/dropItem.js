import Phaser from 'phaser';

export default class DropItem extends Phaser.Physics.Matter.Sprite {
  constructor(data) {
    const {
      scene, x, y, frame,
    } = data;
    super(scene.matter.world, x, y, 'items', frame);
    this.scene.add.existing(this);
    this.setFrictionAir(1);
    this.setScale(0.5);
    this.sound = this.scene.sound.add('pickup');
  }

  pickup() {
    this.destroy();
    this.sound.play();
    return true;
  }
}