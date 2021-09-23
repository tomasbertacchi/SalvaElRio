import Phaser from 'phaser'

export default class mainmenu extends Phaser.Scene{
    constructor(){
        super("menu");
    }
    preload(){
    }
    
    create(){
        //background
        this.add.image(0,0, "main_menu").setOrigin(0,0)

        //botones
        const boton_jugar = this.add.image(1920 / 2, 400, "boton_jugar")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("game"))

        const boton_tutorial = this.add.image(1920 / 2, 550, "boton_tutorial")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("tutorial"))

        const boton_informacion = this.add.image(1920 / 2, 700, "boton_informacion")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("informacion"))

        const boton_creditos = this.add.image(1920 / 2, 850, "boton_creditos")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("creditos"))


    }
    
    update(){



    }

}