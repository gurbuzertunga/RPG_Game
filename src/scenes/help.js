export default class Help extends Phaser.Scene { // eslint-disable-line
  constructor() {
    super('helpScene');
  }

  create() {
    this.add.image(250, 100, 'instructions');
    this.submit = this.add.dom(250, 300, 'button', 'padding:20px;background-color:gray;', 'Go Back');

    this.btn = document.querySelector('button');
    this.btn.addEventListener('click', () => {
      this.scene.start('titleScene');
    });
  }
}