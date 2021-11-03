import Phaser from 'phaser'

export default class pierdenivel extends Phaser.Scene{
    private puntuacion!: Phaser.GameObjects.Text

    constructor(){
        super("pierdenivel");
    }
    preload(){
    }
    
    create(){

        this.add.image(1920/2, 1080/2, "gananivel")
        this.add.text(600, 300, "ETAPA PERDIDA", {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 80})
        this.puntuacion = this.add.text(650,450, "Puntuacion: "+this.registry.get("agarrabasura") ,{fontFamily: "Courier", fontSize: 72, color: "black", fontStyle: "bold"})


        const boton_salir = this.add.image(500, 600, "boton_salir").setScale(0.8)
        .setInteractive()
        .on('pointerdown', () => {this.scene.stop("game");this.scene.stop("ui");this.scene.stop("pierdenivel");this.scene.start("menu")})
    }


}