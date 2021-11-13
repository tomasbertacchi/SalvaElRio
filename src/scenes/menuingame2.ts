import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class menuingame2 extends Phaser.Scene{
    private sonidoOn: any
    constructor(){
        super("menuingame2");
    }
    preload(){
    }
    
    create(){
        //background
        this.add.image(1920/2,1080/2, "menu_ingame")


        if(!this.game.sound.mute){
            this.sonidoOn = this.add.sprite(1920/2,170, "sonidoOn").setScale(0.05)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})
        }
        else {
            this.game.sound.mute = true;
            this.sonidoOn = this.add.sprite(1920/2,180, "sonidoOff").setScale(0.05)
            .setInteractive()
            .on("pointerdown", () =>{this.toggleMute()})

        }
        //botones
        const boton_reanudar = this.add.image(1920 / 2, 300, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.resume("game2");this.scene.resume("ui2");this.scene.stop("menuingame2")})
        this.add.text(812, 252, getPhrase("ingamereanudar"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65}))

        const boton_tutorial = this.add.image(1920 / 2, 550, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game2");this.scene.stop("ui2");this.scene.start("tutorial")})
        const tutorial = this.add.text( 812, 506, "TUTORIAL" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})

        const boton_salir = this.add.image(1920 / 2, 800, "botonazul")
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game2");this.scene.stop("ui2");this.scene.start("menu")})
        this.add.text(865, 753, getPhrase("ingamesalir"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65}))


    }

    toggleMute() {
        if (!this.game.sound.mute) {
            this.game.sound.mute = true;
            console.log("muted")
            this.sonidoOn.setTexture("sonidoOff")
        } else {
            this.game.sound.mute = false;
            console.log("nao nao")
            this.sonidoOn.setTexture("sonidoOn")
        }
    }
}