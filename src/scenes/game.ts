import Phaser from 'phaser'
import PlayerController from './playercontroller'

export default class game extends Phaser.Scene
{
    private cursores!: Phaser.Types.Input.Keyboard.CursorKeys
    private barco!: Phaser.Physics.Arcade.Sprite
<<<<<<< HEAD
   
    private basura!: Phaser.Physics.Arcade.Group
=======
    private tiempo!: number
    private puntuacionbasura!: number
    private basura!: Phaser.Physics.Arcade.Group
    // public target = new Phaser.Math.Vector2()
>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81
    private velocidad: any
    private spawny: any
    private playerController?: PlayerController
    private puntuacionbasura!: number
    private barra: any
    private contaminacion!: number

	constructor()
	{
		super('game')
	}

    init(){
        this.cursores = this.input.keyboard.createCursorKeys()
        this.registry.set('agarrabasura', this.puntuacionbasura)
        
    }

    preload(){
        
    }
    
    create()
    {
        this.scene.run("ui")
<<<<<<< HEAD
        this.puntuacionbasura = 0;
        this.contaminacion = 100
=======
        
        this.puntuacionbasura= 0
        
>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81
        
        ///////////////////////////TILEMAP//////////////////
        const map = this.make.tilemap({key: "nivel1"})  //carga tilemap
        const tileset = map.addTilesetImage("tileset", "tileset")  //carga tileset
        const terreno = map.createLayer("terreno", tileset) //carga layer
        terreno.setCollisionByProperty({borde: true}) //colision por propiedad
        const objectsLayer = map.getObjectLayer('spawner')
        /////////////////////////////////////////////////

        //GENERACION DE BASURA//
        this.basura = this.physics.add.group()
        this.time.addEvent({ delay: 1000, callback: this.numerosrandom, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 1000, callback: this.onSecond2, callbackScope: this, loop: true });
        ////////////////////////

        this.barra = this.physics.add.staticGroup()
        this.barra.create(-100, 1080/2, "barra")
        this.physics.add.collider(this.barra, this.basura, this.restaPunto, undefined, this)

        
        ////render tiles colisionadas//////////d/  ESTA ACTIVADO
        // const debugGraphics = this.add.graphics().setAlpha(0.75);
        // terreno.renderDebug(debugGraphics, {
        //     tileColor: null, // Color of non-colliding tiles
        //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        // });
        /////////////////////////////////a//
        
        ////////////BARCO////////////////
        this.barco = this.physics.add.sprite(200,500 ,"barco")
        this.barco.setSize(80,80) ////CAMBIO/////
        this.physics.add.collider(this.barco, terreno) //COLISIONES BARCO TERRENO
        this.physics.add.overlap(this.barco, this.basura, this.sumaPunto, undefined, this)
<<<<<<< HEAD
=======
        
        this.playerController = new PlayerController(this, this.barco, this.cursores)
        
        
        /////////////////TEXTOS////////////

        //////////////

>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81

        this.playerController = new PlayerController(this, this.barco, this.cursores)
    }

    update(t: number, dt: number){

        if (!this.playerController)
        {
            return
        }
        this.playerController.update(dt)

        if(!this.cursores || !this.barco){
            return
        }

<<<<<<< HEAD
    }
  
=======
        // var distance = Phaser.Math.Distance.Between(this.barco.x, this.barco.y, this.target.x, this.target.y);
        // if (distance < 4)
        // {
        //     this.barco.body.reset(this.target.x, this.target.y);
        // }

        // if(!this.playerController){
        //     return
        // }

        // // this.playerController.update(dt)

        // if(this.target.y < 120){
        //     this.barco.setVelocity(0,0)
        // }    
        // else if (this.target.y > 1020){
        //     this.barco.setVelocity(0,0)
        // }
    }
  


>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81
    onSecond2(){
        this.numerosrandom()
        const spriteList = ["boton_jugar", "boton_siguiente", "tuerca", "barco"]
        const spriteEnemy = spriteList[Phaser.Math.Between(0,3)]
        this.basura.create(1920, this.spawny, spriteEnemy)
<<<<<<< HEAD
        this.basura.setVelocityX(-400)
 
    }

=======
        this.basura.setVelocityX(-200)
 
    }
>>>>>>> cac73ff90a37a04a1de7578490e86b29ab556a81
    sumaPunto(barco, basura){
        console.log(basura)
        basura.destroy()
        this.puntuacionbasura += 1
        this.registry.set("agarrabasura", this.puntuacionbasura)
    }

    numerosrandom(){
        this.velocidad = Phaser.Math.Between(-200, -100)
        this.spawny = Phaser.Math.Between(140, 950)
    }

    restaPunto(barra, basura){
        basura.destroy()
        this.contaminacion -=5
        this.registry.set("restapuntos", this.contaminacion)
        console.log(this.contaminacion)
    }

    
}
