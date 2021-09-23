import Phaser from 'phaser'

export default class tutorial extends Phaser.Scene{
    constructor(){
        super("tutorial");
    }

    preload(){
        


    }
    
    create(){
        this.add.image(0,0, "tutorial").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))


    }
    
}