import barracontaminacion from "./barracontaminacion"

export default class UIscene extends Phaser.Scene
{   

    private tiempo!: number
    private texto_puntuacion!: Phaser.GameObjects.Text
    private puntuacionbasura: any
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.GameObjects.Text
<<<<<<< HEAD
    private graphics!: Phaser.GameObjects.Graphics
=======
>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81
   
	constructor()
	{
		super('ui')
	}

    create(){

<<<<<<< HEAD
        this.graphics = this.add.graphics()
        this.setContaminacionBar(100)
=======
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
>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81

        this.tiempo = 50
        this.texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier", fontSize: 32})
        this.puntuacion = this.add.text(1130,30, "0" ,{fontFamily: "Courier", fontSize: 32})
        this.textotiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        this.numero_tiempo = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier', fontSize: 32});

        
        //TUERCA
        
        this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on("pointerdown", () => {this.scene.run("menuingame");this.scene.pause("game")})
        .on("pointerdown", () => console.log("abre menu ingame"))
        //hacer menu ingame
<<<<<<< HEAD
        
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrabasura')
            this.puntuacion.setText(data)
            if (key === "restapuntos")
            this.setContaminacionBar(data)
        });
        
=======

        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrabasura')
            this.puntuacion.setText(data)
    
        });

>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81
    }
    
    onSecond(){
        this.numero_tiempo.setText('Tiempo restante: ' + this.tiempo);
        this.tiempo = this.tiempo - 1;
        this.registry.set("tiempo", this.tiempo)
        if (this.tiempo == -1){
            this.scene.start('Gameover');
        }
    }
    private setContaminacionBar(data: number)
    {
        const width = 400
        const percent = Phaser.Math.Clamp(data, 0,100) / 100
        this.graphics.clear()
        this.graphics.fillStyle(0x808080)
        this.graphics.fillRoundedRect(40,40,width,20,5)
        if (percent>0){
            this.graphics.fillStyle(0xa82305)
            this.graphics.fillRoundedRect(40,40,width*percent,20,5)
        }

<<<<<<< HEAD
        console.log(percent)
    }
    
    
=======
    onSecond(){
        this.numero_tiempo.setText('Tiempo restante: ' + this.tiempo);
        this.tiempo = this.tiempo - 1;
        this.registry.set("tiempo", this.tiempo)
        if (this.tiempo == -1){
            this.scene.start('Gameover');
        }
    }
  

>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81
}