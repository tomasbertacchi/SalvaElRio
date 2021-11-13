import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class pierdenivel2 extends Phaser.Scene{
    private puntuacion!: Phaser.GameObjects.Text

    constructor(){
        super("pierdenivel2");
    }
    preload(){
    }
    
    create(){

        this.add.image(1920/2, 1080/2, "gananivel")
        //this.add.text(600, 300, "ETAPA PERDIDA", {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 80})
        this.add.text(600, 300, getPhrase("perdersalvaelrio"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 80})
        this.add.text(650,450, getPhrase("salvaelriopuntos") +this.registry.get("agarrabasura"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 72}))

        const boton_salir = this.add.image(600, 780, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game2");this.scene.stop("ui2");this.scene.stop("pierdenivel2");this.scene.start("menu")})

        const boton_reintentar = this.add.image(1320, 780, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game2");this.scene.stop("ui2");this.scene.stop("pierdenivel2");this.scene.start("game2")})

        this.add.text(1220, 745, getPhrase("reintentarrio"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 65})
    }


}