import Phaser from 'phaser'

export default class game extends Phaser.Scene
{
    private cursores!: Phaser.Types.Input.Keyboard.CursorKeys
    private barco!: Phaser.Physics.Arcade.Sprite
    private tiempo!: number
    private texto_puntuacion!: Phaser.Types.GameObjects.Text.TextStyle
    private textotiempo: any
    private numero_tiempo: any
    private puntuacion!: Phaser.Types.GameObjects.Text.TextStyle
    public target = new Phaser.Math.Vector2();
	constructor()
	{
		super('game')
	}

	preload()
    {
        this.cursores = this.input.keyboard.createCursorKeys();
    }

    create()
    {
        this.scene.run("ui")
        ///////////////////////////TILEMAP//////////////////
        const map = this.make.tilemap({key: "nivel1"})  //carga tilemap
        const tileset = map.addTilesetImage("tileset", "tileset")  //carga tileset
        const terreno = map.createLayer("terreno", tileset) //carga layer
        terreno.setCollisionByProperty({borde: true}) //colision por propiedad
        //////////////////////////////////////////////////

        //////render tiles colisionadas///////////
        // const debugGraphics = this.add.graphics().setAlpha(0.75);
        // terreno.renderDebug(debugGraphics, {
        // tileColor: null, // Color of non-colliding tiles
        // collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        // faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        // });
        /////////////////////////////////////

        

        this.tiempo = 50;
        ////////////BARCO////////////////
        this.barco = this.physics.add.sprite(200,500 ,"barco")
        this.barco.setSize(80,80) ////CAMBIO/////
        this.physics.add.collider(this.barco, terreno) //COLISIONES BARCO TERRENO

        //////////////////////////////
        this.input.on("pointerdown", (pointer: { x: number; y: number }) => {

            this.target.x = pointer.x;
            this.target.y = pointer.y;
            var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.barco.x, this.barco.y, pointer.x, pointer.y);
            this.barco.setAngle(angle +90);
            this.physics.moveToObject(this.barco, this.target, 200);
    
        }, this);

        /////////////////TEXTOS////////////
        this.texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier", fontSize: 32})
        this.puntuacion = this.add.text(1130,30, "0",{fontFamily: "Courier", fontSize: 32})
        this.textotiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        this.numero_tiempo = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier', fontSize: 32});
        //////////////


    }

    update(t: number, dt: number){
        if(!this.cursores || !this.barco){
            return
        }


        var distance = Phaser.Math.Distance.Between(this.barco.x, this.barco.y, this.target.x, this.target.y);
        if (this.barco.body.speed > 0)
    {
        if (distance < 4)
        {
            this.barco.body.reset(this.target.x, this.target.y);
        }
    }

    }

    onSecond(){
        this.numero_tiempo.setText('Tiempo restante: ' + this.tiempo);
        this.tiempo = this.tiempo - 1;
        if (this.tiempo == -1){
            this.scene.start('Gameover');
        }
    }
}
