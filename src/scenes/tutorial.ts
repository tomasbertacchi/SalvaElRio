import Phaser from 'phaser'

export default class tutorial extends Phaser.Scene{
    constructor(){
        super("tutorial");
    }

    preload(){
        


    }
    
    create(){
        this.add.image(0,0, "tutorial").setOrigin(0,0)
        this.add.image(200, 1010, "boton_volver")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        const comojugar = this.add.text( 630, 40, "¿CÓMO JUGAR?" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        const palabra_volver = this.add.text( 146, 990, "VOLVER" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})
        const movimiento = this.add.text( 49, 217, "MOVIMIENTO" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        const movimiento_texto = this.add.text( 49, 265, "Clickea sobre el lugar donde quieres ir\ny el bote se moverá"{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
        const basura = this.add.text( 43, 352   , "BASURA" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        const basura_texto = this.add.text( 49, 400, "Recolecta la basura que aparece en el río\nclickeandola"{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
        const contaminacion = this.add.text( 47, 492   , "CONTAMINACIÓN" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        const contaminacion_texto = this.add.text( 49, 530, "Evita que la barra de contaminación se llene,\n  sino perderas"{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
        const puntuacion = this.add.text( 45, 645, "PUNTUACIÓN" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        const puntuacion_texto = this.add.text( 49, 680, "Suma puntos juntando la mayor cantidad de\nbasura posible"{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })


    }
    
}