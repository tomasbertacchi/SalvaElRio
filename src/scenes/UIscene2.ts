import barracontaminacion from "./barracontaminacion"
import { getPhrase } from '~/services/translations'

export default class UIscene2 extends Phaser.Scene
{   

    private tiempo!: any
    private texto_puntuacion!: Phaser.GameObjects.Text
    private puntuacionbasura: any
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.GameObjects.Text
    private graphics!: Phaser.GameObjects.Graphics
    private percent!: any
    private cantidadContaminacion2!: number
    private contaminacion: any
	constructor()
	{
		super('ui2')
	}

    create(){

        this.scene.stop("pierdenivel")
        this.scene.stop("game")
        this.scene.stop("ui")

        this.graphics = this.add.graphics()
        this.setContaminacionBar2(100)
        this.cantidadContaminacion2 = 100


        this.tiempo = 50
        //this.texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier", fontSize: 32, fontStyle:"bold"})
        this.add.text(800,30, getPhrase("salvaelriopuntos"){color: "white", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}))

        this.puntuacion = this.add.text(1035,30, "0" ,{fontFamily: "Courier", fontSize: 32, fontStyle:"bold"})
        this.textotiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });

        this.numero_tiempo = this.add.text(1650, 30, this.tiempo, {fontFamily: 'Courier', fontSize: 32, fontStyle:"bold"})
        //this.numero_tiempo = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier', fontSize: 32, fontStyle:"bold"});
        this.add.text(1300, 30, getPhrase("salvaelriotiempo"){color: "white", fontStyle: "bold", fontFamily: "Courier", fontSize: 32}))

        //TUERCA
        
        this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on("pointerdown", () => {this.scene.run("menuingame2");this.scene.pause("game2");this.scene.pause("ui2")})
        .on("pointerdown", () => console.log("abre menu ingame"))
        //hacer menu ingame
        
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrabasura2')
            this.puntuacion.setText(data)
            
            if (key === "restapuntos2")
            this.setContaminacionBar2(data)
            if((data) <= -5){
                this.pierde2()
            }
        });
        
    }
    


    onSecond(){
        this.numero_tiempo.setText(this.tiempo);
        this.tiempo = this.tiempo - 1;
        this.registry.set("tiempo", this.tiempo)
        if (this.tiempo == -1){
            this.scene.pause("ui2")
            this.scene.pause("game2")
            this.scene.run('gananivel2');
            console.log("gana")
        }
    }

    pierde2(){
        console.log("cambio de escena")
        this.scene.pause("ui2")
        this.scene.pause("game2")
        this.scene.run('pierdenivel2')
    }



    private setContaminacionBar2(data: number)
    {
        const width = 400
        this.percent = Phaser.Math.Clamp(data, 0,100) / 100
        this.graphics.clear()
        this.graphics.fillStyle(0x808080)
        this.graphics.fillRoundedRect(40,40,width,20,5)
        if (this.percent>0){
            this.graphics.fillStyle(0xa82305)
            this.graphics.fillRoundedRect(40,40,width*this.percent,20,5)
        }

    }
    
    
}