import Boot from '../boot';

export class Earth {

    private vImagePath: string;
    private boot;
    private earth;
    private static assetsPath = '';

    constructor(boot: Boot) {
        this.boot = boot;
        Earth.assetsPath = Boot.ASSETS_PATH;
        this.vImagePath = `${Earth.assetsPath}/images/earth.png`;
        this.boot.load.image('earth', this.vImagePath);
    }

    init(): void {
        this.earth = this.boot.add.sprite(335, -200, 'earth');
        this.earth.inputEnabled = true;
    }

    get imagePath(): string {
        return this.vImagePath;
    }

    set imagePath(newImagePath: string) {
        this.vImagePath = newImagePath;
    }


    firstAnimation(): void {
        this.boot.add.tween(this.earth).to({y: 240}, 4000, Phaser.Easing.Bounce.Out, true);
        this.loadEvents();
    }

    loadEvents () {

        this.earth.events.onInputDown.add(Earth.clickEarth, this.boot);

    }

    static clickEarth () {

        console.log('Click in earth');

    }

}
