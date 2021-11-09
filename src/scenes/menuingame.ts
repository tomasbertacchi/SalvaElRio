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
        const boton_reanudar = this.add.image(1920 / 2, 300, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.resume("game");this.scene.stop("menuingame")})
        const reanudar = this.add.text( 812, 252, "REANUDAR" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_tutorial = this.add.image(1920 / 2, 550, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.start("tutorial")})
        const tutorial = this.add.text( 812, 506, "TUTORIAL" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_salir = this.add.image(1920 / 2, 800, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.start("menu")})
        const salir = this.add.text( 865, 753, "SALIR" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

    }
    
    update(){



    }

}