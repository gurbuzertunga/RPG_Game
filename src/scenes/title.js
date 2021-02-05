export default class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {
    
    }

    create() {
        this.play = this.add.image(250,50,'play').setInteractive();
        this.play.on('pointerdown',() => {
            this.scene.start('getUserName');
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
        this.score.on('pointerdown',() => {
            console.log('click works on score');
            this.scene.start('leaderboard');
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