
export default class Boot extends Phaser.State {

    preload() {

        this.load.image('space', 'assets/images/space-background.png');
        this.load.image('earth', 'assets/images/earth.png');

    }

    create() {

        this.add.sprite(0, 0, 'space');
        const earth = this.add.sprite(340, -200, 'earth');

        const venereOrbit = this.add.graphics(310, 210);
        venereOrbit.lineStyle(4, 0xD77302, 1);
        venereOrbit.drawCircle(100, 100, 500);

        const moonOrbit = this.add.graphics(310, 210);
        moonOrbit.lineStyle(4, 0xD77302, 1);
        moonOrbit.drawCircle(100, 100, 250);

        this.game.state.start('Preloader', true, false);
        earth.inputEnabled = true;

        this.add.tween(earth).to({y: 240}, 4000, Phaser.Easing.Bounce.Out, true);

        this.loadEvents(earth);

    }

    loadEvents (earth) {

        earth.events.onInputDown.add(this.clickEarth, this);

    }

    clickEarth () {

        console.log('Click in earth');

    }

}

