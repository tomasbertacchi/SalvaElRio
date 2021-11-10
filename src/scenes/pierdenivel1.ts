import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class pierdenivel extends Phaser.Scene{
    private puntuacion!: Phaser.GameObjects.Text

    constructor(){
        super("pierdenivel");
    }
    preload(){
    }
    
    create(){

        this.add.image(1920/2, 1080/2, "gananivel")
        //this.add.text(600, 300, "ETAPA PERDIDA", {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 80})
        this.add.text(600, 300, getPhrase("perdersalvaelrio"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 80}))
        this.add.text(650,450, getPhrase("salvaelriopuntos") +this.registry.get("agarrabasura"){color: "red", fontStyle: "bold", fontFamily: "Courier", fontSize: 72}))

        const boton_salir = this.add.image(600, 600, "boton").setScale(0.8)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.stop("pierdenivel");this.scene.start("menu")})
    }


}