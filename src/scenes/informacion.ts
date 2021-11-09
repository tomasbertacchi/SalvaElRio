import Phaser from 'phaser'

export default class informacion extends Phaser.Scene{
    constructor(){
        super("informacion");
    }
    preload(){
    
    }
    //      \n
    create(){
        this.add.image(0,0, "informacion").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        const palabra_volver = this.add.text( 146, 990, "VOLVER" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})
        const informacion = this.add.text( 630, 40, "INFORMACIÓN" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        const movimiento_texto = this.add.text( 30, 240, "La basura en los ríos daña los hábitats físicos, transportan contaminantes químicos,\namenazan la vida acuática e interfieren con el uso humano de los ríos y \nmedio ambientes fluviales, marinos y costeros.\n\n\nLos residuos de plástico son los que tienen el mayor potencial nocivo para\nel medio ambiente, la vida silvestre y los serse humanos.\n\n\nActualmente el 70% de la contaminación del Río Paraná, el río mas grande\nde Santa Fe, es plastico, en el cual predominan botellas descartables,\nlatas de bebidas, bolsas y emboltorios."{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 42    })

    }
    
    update(){



    }

}