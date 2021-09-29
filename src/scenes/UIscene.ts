import barracontaminacion from "./barracontaminacion"

export default class UIscene extends Phaser.Scene
{
   
	constructor()
	{
		super('ui')
	}

    create(){

        //CONTAMINACION
        const x = 100
        const y = 50
        const fullwidth = 300
        const barra_contaminacion = new barracontaminacion (this, x,y, fullwidth)
        .withLeftCap(this.add.image(0,0,"leftcap"))
        .withMiddleCap(this.add.image(0,0,"midcap"))
        .withRightCap(this.add.image(0,0,"rightcap"))
        .layout()

        
        //FUNCIONA!!
        this.add.rectangle(300, 200, 100, 100, 1, 1)
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            barra_contaminacion.animateToFill(0.9)
        })
        .on("pointerdown", ()=> console.log("baja la barrita?"))

        //TUERCA

        this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on("pointerdown", () => {this.scene.run("menuingame");this.scene.pause("game")})
        .on("pointerdown", () => console.log("abre menu ingame"))
        //hacer menu ingame


    }

  

}