import barracontaminacion from "./barracontaminacion"
import { getPhrase } from '~/services/translations'

export default class UIscene3 extends Phaser.Scene
{   

    private tiempo!: any
    private texto_puntuacion!: Phaser.GameObjects.Text
    private puntuacionbasura: any
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.GameObjects.Text
    private graphics!: Phaser.GameObjects.Graphics
    private percent!: any
    private cantidadContaminacion!: number
    private contaminacion: any
    private sonidoclick: any
    private musica: any
    private sonidorio: any
    private sonidobasura: any
    private sonidovictoria: any
    private sonidoderrota: any
    private escape:any
	constructor()
	{
		super('ui3')
	}

    create(){

        this.graphics = this.add.graphics()
        this.setContaminacionBar(100)
        this.cantidadContaminacion = 100

        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })

        this.musica = this.sound.add("musica1",{
            volume:0.2,
            loop:true,
        })

        this.sonidobasura = this.sound.add("sonidobasura",{
            loop: false,
            volume: 0.4

        })
        this.sonidorio = this.sound.add("sonidorio",{
            volume: 0.02,
            loop:true,
        })

        this.sonidovictoria = this.sound.add("victoria",{
            volume: 0.7,
            loop: false,
        })

        this.sonidoderrota = this.sound.add("derrota",{
            volume: 0.7,
            loop: false,
        })
        this.escape = this.sound.add("escape",{
            volume: 0.4,
            loop:false,
        })

        //this.musica.play()
        //this.sonidorio.play()

        this.tiempo = 30
        this.add.image(935,40, "cartel")
        this.add.image(1490,40, "cartel")
        //this.texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier", fontSize: 32, fontStyle:"bold"})
        this.add.text(800,30, getPhrase("salvaelriopuntos"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        this.puntuacion = this.add.text(1035,30, "0" ,{fontFamily: "Courier", fontSize: 32, fontStyle:"bold",color: "black"})
        this.textotiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });

        this.numero_tiempo = this.add.text(1640, 30, this.tiempo, {fontFamily: 'Courier', fontSize: 32, fontStyle:"bold",color: "black"})
        //this.numero_tiempo = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier', fontSize: 32, fontStyle:"bold"});
        this.add.text(1300, 30, getPhrase("salvaelriotiempo"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        //TUERCA
        
        this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on("pointerdown", () => {this.scene.run("menuingame3");this.scene.pause("game3");this.scene.pause("ui3")})
        .on("pointerdown", () => console.log("abre menu ingame"))
        .on("pointerdown", () => this.sonidoclick.play())
        //hacer menu ingame
        
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'agarrabasura3'){
                this.puntuacion.setText(data)
                this.sonidobasura.play()

            }
            
            if (key === "restapuntos3"){
                this.setContaminacionBar(data)

            }
            if((data) <= -2){
                this.pierde()
            }

            if (key === "restapuntos4"){
                this.escape.play()
                this.setContaminacionBar(data)
            }
          
        });
        
    }
    


    onSecond(){
        this.numero_tiempo.setText(this.tiempo);
        this.tiempo = this.tiempo - 1;
        this.registry.set("tiempo", this.tiempo)
        if (this.tiempo == -1){
            this.scene.pause("ui3")
            this.scene.pause("game3")
            this.scene.run('gananivel3');
            this.sonidovictoria.play()
            this.musica.stop();
            this.sonidorio.stop();
            console.log("gana")
        }
    }

    pierde(){
        console.log("cambio de escena")
        this.scene.pause("ui3")
        this.scene.pause("game3")
        this.scene.run('pierdenivel3')
        this.sonidoderrota.play()
        this.musica.stop()
        this.sonidorio.stop();
    }



    private setContaminacionBar(data: number)
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