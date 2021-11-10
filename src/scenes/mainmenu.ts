import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

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
        const boton_jugar = this.add.image(1920 / 2, 400, "boton")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("game"))

        
		this.add.text(912, 380, getPhrase("JUGAR"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}

        const boton_tutorial = this.add.image(1920 / 2, 550, "boton")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("tutorial"))

        const palabra_tutorial = this.add.text( 886, 530, "TUTORIAL" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        const boton_informacion = this.add.image(1920 / 2, 700, "boton")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("informacion"))

        this.add.text(853, 680, getPhrase("INFORMACIÓN"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}
        
        
        const boton_creditos = this.add.image(1920 / 2, 850, "boton")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("creditos"))
        
        this.add.text(887, 830, getPhrase("CREDITOS"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}
        

    }

}