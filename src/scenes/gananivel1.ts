import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class gananivel extends Phaser.Scene{
    private puntuacion!: Phaser.GameObjects.Text

    constructor(){
        super("gananivel");
    }
    preload(){
    }
    
    create(){

        this.add.image(1920/2, 1080/2, "gananivel")
        this.add.text(600, 300, getPhrase("ganarsalvaelrio"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 80}))
        this.add.text(650,450, getPhrase("salvaelriopuntos") +this.registry.get("agarrabasura"){color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 72}))


        const boton_salir = this.add.image(600, 800, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.stop("gananivel");this.scene.start("menu")})
    }


}