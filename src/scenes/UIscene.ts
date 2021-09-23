import barracontaminacion from "./barracontaminacion"
export default class UIscene extends Phaser.Scene
{
	constructor()
	{
		super('ui')
	}

    create(){

        //CONTAMINACION
        const x = 200
        const y = 50
        const fullwidth = 300
        const barra_contaminacion = new barracontaminacion (this, x,y, fullwidth)
        .withLeftCap(this.add.image(200,100,"leftcap"))
        .withMiddleCap(this.add.image(200,100,"midcap"))
        .withRightCap(this.add.image(200,100,"rightcap"))
        .layout()

        this.add.rectangle(20, 20, 100, 100, 1, 1)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            barra_contaminacion.llenarBarra(0.5)
        })
        .on("pointerdown", ()=> console.log("ashe"))
        .on("pointerdown", ()=> this.scene.stop("game"))

        //TUERCA

    }




}