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
        this.earth = this.boot.add.sprite(335, -250, 'earth');
        this.earth.inputEnabled = true;
        this.earth.anchor.setTo(0.5, 0.5);
        this.boot.physics.arcade.enable(this.earth);
    }

    get imagePath(): string {
        return this.vImagePath;
    }

    set imagePath(newImagePath: string) {
        this.vImagePath = newImagePath;
    }


    animations(): void {
        this.input();
    }

    events(): void {
        this.earth.events.onInputDown.add(Earth.clickEarth, this.boot);
    }

    input() {
        this.boot.add.tween(this.earth).to({y: 240}, 2500, Phaser.Easing.Bounce.Out, true);
    }

    rotate() {
        this.earth.position.rotate(10, 0, 2, true, 100);
    }

    static clickEarth () {
        console.log('Click in earth');
    }

}
