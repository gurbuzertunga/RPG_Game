import enemiesPic from '../assets/img/enemies.png';
import enemiesAtlas from '../assets/img/enemies_atlas.json';
import enemiesAnim from '../assets/img/enemies_anim.json';

import trollSound from '../assets/audio/troll.wav';
import entSound from '../assets/audio/ent.wav';
import banditSound from '../assets/audio/bandit.wav';


import MatterEntity from './matterEntity';

export default class Enemy extends MatterEntity {
  static preload(scene) {
    scene.load.atlas('enemies', enemiesPic, enemiesAtlas);
    scene.load.animation('enemies_anim', enemiesAnim);
    scene.load.audio('troll', trollSound);
    scene.load.audio('ent', entSound);
    scene.load.audio('bandit', banditSound);
  }

  constructor(data) {
    const { scene, enemy } = data;
    const drops = JSON.parse(enemy.properties.find(p => p.name === 'drops').value);
    const health = enemy.properties.find(p => p.name === 'health').value;
    super({
      scene, x: enemy.x, y: enemy.y, texture: 'enemies', frame: `${enemy.name}_idle_1`, drops, health, name: enemy.name,
    });

    const { Body, Bodies } = Phaser.Physics.Matter.Matter; // eslint-disable-line
    const enemyCollider = Bodies.circle(this.x, this.y, 12, { isSensor: false, label: 'enemyCollider' });
    const enemySensor = Bodies.circle(this.x, this.y, 80, { isSensor: true, label: 'enemySensor' });
    const compoundBody = Body.create({
      parts: [enemyCollider, enemySensor],
      frictionAir: 0.35,
    });
    this.setExistingBody(compoundBody);
    this.setFixedRotation();
    this.scene.matterCollision.addOnCollideStart({
      objectA: [enemySensor],
      callback: other => { if (other.gameObjectB && other.gameObjectB.name === 'player') this.attacking = other.gameObjectB; },
      context: this.scene,
    });
  }

  attack(target) {
    if (target.dead || this.dead) {
      clearInterval(this.attacktimer);
      return;
    }
    target.hit();
  }

  update() {
    if (this.dead) return;
    if (this.attacking) {
      const direction = this.attacking.position.subtract(this.position);
      if (direction.length() > 24) {
        const v = direction.normalize(); // eslint-disable-line
        this.setVelocityX(direction.x);
        this.setVelocityY(direction.y);
        if (this.attacktimer) {
          clearInterval(this.attackTimer);
          this.attacktimer = null;
        }
      } else if (this.attacktimer == null) {
        this.attacktimer = setInterval(this.attack, 500, this.attacking);
      }
    }
    this.setFlipX(this.velocity.x < 0);
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play(`${this.name}_walk`, true);
    } else {
      this.anims.play(`${this.name}_idle`, true);
    }
  }
}