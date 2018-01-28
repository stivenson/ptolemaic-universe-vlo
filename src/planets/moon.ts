import Boot from '../boot';

export default class Moon {

    private vImagePath: string;
    private boot;
    private moon;
    private orbit;
    private static assetsPath = '';

    constructor(boot: Boot) {
        this.boot = boot;
        Moon.assetsPath = Boot.ASSETS_PATH;
        this.vImagePath = `${Moon.assetsPath}/images/moon.png`;
        this.boot.load.image('moon', this.vImagePath);
    }

    init(): void {
        this.orbit = this.boot.add.graphics(310, 210);
        this.orbit.lineStyle(4, 0xD77302, 1);
        this.orbit.drawCircle(100, 100, 250);
        this.moon = this.boot.add.sprite(200, 200, 'moon');
        this.moon.anchor.setTo(0.5);
        this.moon.pivot.x = 100;
    }

    animations(): void {
        this.orbitAnimation();
    }

    orbitAnimation() {
        this.moon.position.rotate(400, 400, 2, true, 100);
        this.boot.add.tween(this.moon).to( { x: 500, y: 600}, 3000, Phaser.Easing.Circular.In, true, 0, Infinity, true);
    }

}
