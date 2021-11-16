import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'

export default class tutorial extends Phaser.Scene{
    private sonidoclick: any
    constructor(){
        super("tutorial");
    }

    preload(){
        

        
    }
    
    create(){

        this.sonidoclick = this.sound.add("sonidoclick",{
            volume: 0.5,
            loop:false,
        })

        this.scene.stop("ui")

        this.add.image(0,0, "tutorial").setOrigin(0,0)
        this.add.image(200, 1010, "boton").setScale(0.6)
        .setInteractive()
        .on('pointerdown', () => this.scene.start("menu"))
        .on('pointerdown', () => this.sonidoclick.play())
        //const comojugar = this.add.text( 630, 40, "¿CÓMO JUGAR?" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        this.add.text(630, 40, getPhrase("¿CÓMO JUGAR?"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 90})
        //const palabra_volver = this.add.text( 146, 990, "VOLVER" {color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})
        this.add.text(146, 990, getPhrase("VOLVER"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 32})

        this.add.text( 49, 217, getPhrase("titulotutorialsalvaelrio1"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 265, getPhrase("tutorialsalvaelrio1"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
        
        this.add.text( 43, 352, getPhrase("titulotutorialsalvaelrio2"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 400, getPhrase("tutorialsalvaelrio2"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })

        this.add.text( 47, 492, getPhrase("titulotutorialsalvaelrio3"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 540, getPhrase("tutorialsalvaelrio3"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })

        this.add.text( 45, 645, getPhrase("titulotutorialsalvaelrio4"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 690, getPhrase("tutorialsalvaelrio4"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
        
        this.add.text( 45, 790, getPhrase("titulotutorialsalvaelrio5"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 43    })
        this.add.text( 49, 835, getPhrase("tutorialsalvaelrio5"),{color: "black", fontStyle: "bold", fontFamily: "Courier", fontSize: 35    })
    
    }
    
}