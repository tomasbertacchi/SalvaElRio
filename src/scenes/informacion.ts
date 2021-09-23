import Phaser from 'phaser'

export default class informacion extends Phaser.Scene{
    constructor(){
        super("informacion");
    }
    preload(){
    
    }
    
    create(){
        this.add.image(0,0, "informacion").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))


    }
    
    update(){



    }

}