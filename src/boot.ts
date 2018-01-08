
export default class Boot extends Phaser.State {

    preload() {

        this.load.image('space', 'assets/images/space-background.png');
        this.load.image('earth', 'assets/images/earth.png');

    }

    create() {

        this.add.sprite(0, 0, 'space');
        const earth = this.add.sprite(340, 240, 'earth');

        const venereOrbit = this.add.graphics(310, 210);
        venereOrbit.lineStyle(8, 0xD77302, 1);
        venereOrbit.drawCircle(100, 100, 500);

        const moonOrbit = this.add.graphics(310, 210);
        moonOrbit.lineStyle(8, 0xD77302, 1);
        moonOrbit.drawCircle(100, 100, 250);

        this.game.state.start('Preloader', true, false);
        earth.inputEnabled = true;
        earth.input.enableDrag(true);

    }

}

