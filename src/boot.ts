
export default class Boot extends Phaser.State {

    preload() {

        this.load.image('space', 'assets/images/space-background.png');

    }

    create() {

        const s = this.add.sprite(0, 0, 'space');
        this.game.state.start('Preloader', true, false);

    }

}

