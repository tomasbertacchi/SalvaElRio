import barracontaminacion from "./barracontaminacion"

export default class UIscene extends Phaser.Scene
{   

    private tiempo!: number
    private texto_puntuacion!: Phaser.GameObjects.Text
    private puntuacionbasura: any
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.GameObjects.Text
   
	constructor()
	{
		super('ui')
	}

    create(){

        this.tiempo = 50
        this.texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier", fontSize: 32})
        this.puntuacion = this.add.text(1130,30, "0" ,{fontFamily: "Courier", fontSize: 32})
        this.textotiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        this.numero_tiempo = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier', fontSize: 32});

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

        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrabasura')
            this.puntuacion.setText(data)
    
        });

    }

    onSecond(){
        this.numero_tiempo.setText('Tiempo restante: ' + this.tiempo);
        this.tiempo = this.tiempo - 1;
        this.registry.set("tiempo", this.tiempo)
        if (this.tiempo == -1){
            this.scene.start('Gameover');
        }
    }
  

}