import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
export default class informacion extends Phaser.Scene{
    constructor(){
        super("informacion");
    }
    preload(){
    
    }
    //      \n
    create(){
        this.add.image(0,0, "informacion").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        this.add.text(146, 990, getPhrase("VOLVER"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}
        this.add.text(630, 40, getPhrase("INFORMACIÓN"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        this.add.text(30, 240, getPhrase("textoinfo"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 42}))

    }
    
    update(){



    }

}