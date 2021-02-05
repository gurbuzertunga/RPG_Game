export default class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {
    
    }

    create() {
        this.add.text(350,10,'music:');
        this.music_on = this.add.image(425,25,'music_on').setInteractive();
        this.music_on.on('pointerdown',() => background.play());
        this.music_off = this.add.image(475,25,'music_off').setInteractive();
        this.music_off.on('pointerdown',() => this.sound.stopAll());
        const background = this.sound.add('background',{ loop: true, volume: 0.3 })
        this.sound.pauseOnBlur = false;
        
        this.play = this.add.image(250,150,'play').setInteractive();
        this.play.on('pointerdown',() => {
            this.scene.start('getUserName');
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
    };

    update() {
        // this.scene.start('mainScene');
    }

}