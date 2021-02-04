import play_img from '../assets/img/play.png';
import options_img from '../assets/img/options.png';
import help_img from '../assets/img/help.png';
import score_img from '../assets/img/score.png';
import quit_img from '../assets/img/quit.png';

export default class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {
    
    }

    create() {
        this.play = this.add.image(250,50,'play').setInteractive();
        this.play.on('pointerdown',() => {
            this.scene.start('mainScene');
        })
        this.options = this.add.image(250,150,'options').setInteractive();
        this.options.on('pointerdown',() => {
            this.scene.start('optionsScene');
        })
        this.help = this.add.image(250,250,'help').setInteractive();
        this.help.on('pointerdown',() => {
            this.scene.start('helpScene');
        })
        this.score = this.add.image(250,350,'score').setInteractive();
        this.play.on('pointerdown',() => {
            this.scene.start('scoreScene');
        })
        this.quit = this.add.image(250,450,'quit').setInteractive();
        this.quit.on('pointerdown',() => {
            close();
        })
    };

    update() {
        // this.scene.start('mainScene');
    }

}