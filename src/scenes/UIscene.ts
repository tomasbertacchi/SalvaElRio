import barracontaminacion from "./barracontaminacion"

export default class UIscene extends Phaser.Scene
{   

    private tiempo!: number
    private texto_puntuacion!: Phaser.GameObjects.Text
    private puntuacionbasura: any
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.GameObjects.Text
    private graphics!: Phaser.GameObjects.Graphics
   
	constructor()
	{
		super('ui')
	}

    create(){

        this.graphics = this.add.graphics()
        this.setContaminacionBar(100)

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
        
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrabasura')
            this.puntuacion.setText(data)
            if (key === "restapuntos")
            this.setContaminacionBar(data)
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

        console.log(percent)
    }
    
    
}