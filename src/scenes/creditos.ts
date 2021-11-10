import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class creditos extends Phaser.Scene{
    constructor(){
        super("creditos");
    }
    preload(){
        

    }
    //creditossalvaelrio1
    create(){
        this.add.image(0,0, "creditos").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        this.add.text(146, 990, getPhrase("VOLVER"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}
        
        this.add.text(562, 95, getPhrase("NUESTRO EQUIPO"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})

        const alvaro = this.add.text( 335, 370, "JORGE ALVARO" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        this.add.text( 335, 430, getPhrase("creditossalvaelrio1"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 38})
        
        const gabriel = this.add.text( 335, 620, "BAY GABRIEL" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        this.add.text( 335, 670, getPhrase("creditossalvaelrio1"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 38})
        this.add.text( 335, 710, getPhrase("creditossalvaelrio2"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 38})
        
        const julio = this.add.text( 995, 370, "BERTACCHI JULIO" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        this.add.text( 995, 430, getPhrase("creditossalvaelrio1"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 38})
        
        const tomas = this.add.text( 995, 620, "BERTACCHI TOMAS" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 45})
        this.add.text( 995, 670, getPhrase("creditossalvaelrio1"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 38})
        this.add.text( 995, 710, getPhrase("creditossalvaelrio2"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 38})
        


    }
    
    update(){



    }

}