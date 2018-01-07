import 'p2';
import 'pixi';
import 'phaser';
import Boot from './boot';

export class Game extends Phaser.Game {

    constructor() {

        super(800, 600, Phaser.AUTO, 'ptolemaic-universe-vlo', null);
        this.state.add('boot', Boot, false);
        this.state.start('boot');

    }

}

window.onload = () => {

    const game = new Game();

};
