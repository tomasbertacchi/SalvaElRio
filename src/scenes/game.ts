import Phaser from 'phaser'
import PlayerController from './playercontroller'

export default class game extends Phaser.Scene
{
    private cursores!: Phaser.Types.Input.Keyboard.CursorKeys
    private barco!: Phaser.Physics.Arcade.Sprite
    private tiempo!: number
    private texto_puntuacion!: Phaser.GameObjects.Text
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.GameObjects.Text
    private basura!: Phaser.Physics.Arcade.Group
    // public target = new Phaser.Math.Vector2()
    private velocidad: any
    private spawny: any
    private playerController?: PlayerController

	constructor()
	{
		super('game')
	}

    init(){
        this.cursores = this.input.keyboard.createCursorKeys()
    }

    preload(){
        
    }
    
    create()
    {
        this.scene.run("ui")
        
        
        
        ///////////////////////////TILEMAP//////////////////
        const map = this.make.tilemap({key: "nivel1"})  //carga tilemap
        const tileset = map.addTilesetImage("tileset", "tileset")  //carga tileset
        const terreno = map.createLayer("terreno", tileset) //carga layer
        terreno.setCollisionByProperty({borde: true}) //colision por propiedad
        const objectsLayer = map.getObjectLayer('spawner')
        
        this.basura = this.physics.add.group()
        
        this.time.addEvent({ delay: 1000, callback: this.numerosrandom, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 1000, callback: this.onSecond2, callbackScope: this, loop: true });
        
        
        ////render tiles colisionadas//////////d/  ESTA ACTIVADO
        const debugGraphics = this.add.graphics().setAlpha(0.75);
        terreno.renderDebug(debugGraphics, {
            tileColor: null, // Color of non-colliding tiles
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
            faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        });
        /////////////////////////////////a//
        // this.input.on("pointerdown", (pointer: { x: number; y: number }) => {
            
        //     this.target.x = pointer.x;
        //     this.target.y = pointer.y;
        //     var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.barco.x, this.barco.y, pointer.x, pointer.y);
        //     this.barco.setAngle(angle +90);
        //     this.physics.moveToObject(this.barco, this.target, 200);
            
        // }, this);
        
        this.tiempo = 50;
        ////////////BARCO////////////////
        this.barco = this.physics.add.sprite(200,500 ,"barco")
        this.barco.setSize(80,80) ////CAMBIO/////
        this.physics.add.collider(this.barco, terreno) //COLISIONES BARCO TERRENO
        this.physics.add.overlap(this.barco, this.basura, this.sumaPunto)
        
        this.playerController = new PlayerController(this, this.barco, this.cursores)
        
        
        /////////////////TEXTOS////////////
        this.tiempo = 50
        this.texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier", fontSize: 32})
        this.puntuacion = this.add.text(1130,30, "0",{fontFamily: "Courier", fontSize: 32})
        this.textotiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        this.numero_tiempo = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier', fontSize: 32});
        //////////////


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
  

    onSecond(){
        this.numero_tiempo.setText('Tiempo restante: ' + this.tiempo);
        this.tiempo = this.tiempo - 1;
        this.registry.set("tiempo", this.tiempo)
        if (this.tiempo == -1){
            this.scene.start('Gameover');
        }
    }
    onSecond2(){
        this.numerosrandom()
        this.basura.create(1920, this.spawny, "barco")
        this.basura.setVelocityX(-200)
 
    
    }
    sumaPunto(){
        
    }
    numerosrandom(){
        this.velocidad = Phaser.Math.Between(-200, -100)
        this.spawny = Phaser.Math.Between(140, 950)
    }
    
}
