import { Earth } from './planets/earth';
import Moon from './planets/moon';
import { Venere } from './planets/venere';

export default class Boot extends Phaser.State {

    title: string;
    private styleTitle: object;
    public static ASSETS_PATH = 'assets';
    private static earth;
    private static moon;
    private static venere;

    preload() {

        this.load.image('space', `${Boot.ASSETS_PATH}/images/space-background.png`);
        this.title = 'Ptolemaic Universe';
        this.styleTitle = { font: '25px Arial', fill: '#ffffff', align: 'center' };

        // init earth
        Boot.earth = new Earth(this);

        // init moon
        Boot.moon = new Moon(this);

        // init venere
        Boot.venere = new Venere(this);

    }

    create() {

        this.add.sprite(0, 0, 'space');

        Boot.earth.init();
        Boot.earth.firstAnimation();
        Boot.earth.loadEvents();
        Boot.moon.initOrbit();
        Boot.venere.initOrbit();

        this.add.text(307, 0, this.title, this.styleTitle);
        this.game.state.start('Preloader', true, false);

    }

}

