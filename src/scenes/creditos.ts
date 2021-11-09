import Phaser from 'phaser'

export default class creditos extends Phaser.Scene{
    constructor(){
        super("creditos");
    }
    preload(){
        

    }
    
    create(){
        this.add.image(0,0, "creditos").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        const palabra_volver = this.add.text( 146, 990, "VOLVER" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})
        const creditos = this.add.text( 562, 95, "NUESTRO EQUIPO" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        const alvaro = this.add.text( 335, 370, "JORGE ALVARO" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        const programador1 = this.add.text( 335, 430, "Programador" {color: "black", fontFamily: "Courier", fontSize: 38})
        const gabriel = this.add.text( 335, 620, "BAY GABRIEL" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        const programador2 = this.add.text( 335, 670, "Programador" {color: "black", fontFamily: "Courier", fontSize: 38})
        const artista1 = this.add.text( 335, 710, "Artista" {color: "black", fontFamily: "Courier", fontSize: 38})
        const julio = this.add.text( 995, 370, "BERTACCHI JULIO" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        const programador3 = this.add.text( 995, 430, "Programador" {color: "black", fontFamily: "Courier", fontSize: 38})
        const tomas = this.add.text( 995, 620, "BERTACCHI TOMAS" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        const programador4 = this.add.text( 995, 670, "Programador" {color: "black", fontFamily: "Courier", fontSize: 38})
        const artista2 = this.add.text( 995, 710, "Artista" {color: "black", fontFamily: "Courier", fontSize: 38})


    }
    
    update(){



    }

}