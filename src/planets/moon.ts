import Boot from '../boot';

export default class Moon {

    private boot;
    private moon;
    private orbit;
    private static assetsPath = '';

    constructor(boot: Boot) {
        Moon.assetsPath = Boot.ASSETS_PATH;
        this.boot = boot;
    }

    initOrbit(): void {
        this.orbit = this.boot.add.graphics(310, 210);
        this.orbit.lineStyle(4, 0xD77302, 1);
        this.orbit.drawCircle(100, 100, 250);
    }

}
