import Phaser from 'phaser'

export default class menuingame extends Phaser.Scene{
    constructor(){
        super("menuingame");
    }
    preload(){
    }
    
    create(){
        //background
        this.add.image(1920/2,1080/2, "menu_ingame")

        //botones
        const boton_reanudar = this.add.image(1920 / 2, 300, "boton_reanudar")
        .setInteractive()
        .on('pointerdown', () => {this.scene.resume("game");this.scene.stop("menuingame")})

        const boton_tutorial = this.add.image(1920 / 2, 550, "boton_tutorial2")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.start("tutorial")})

        const boton_salir = this.add.image(1920 / 2, 800, "boton_salir")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.start("menu")})

    }
    
    update(){



    }

}