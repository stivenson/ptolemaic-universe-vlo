import Boot from '../boot';


export class Venere {

    private boot;
    private moon;
    private orbit;
    private static assetsPath = '';

    constructor(boot: Boot) {
        Venere.assetsPath = Boot.ASSETS_PATH;
        this.boot = boot;
    }

    initOrbit(): void {
        this.orbit = this.boot.add.graphics(310, 210);
        this.orbit.lineStyle(4, 0xD77302, 1);
        this.orbit.drawCircle(100, 100, 500);
    }

}
