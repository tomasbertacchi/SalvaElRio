import Phaser from 'phaser'

export default class preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
    {
        this.load.image("tileset", "assets/tileset.png")
        this.load.tilemapTiledJSON("nivel1", "assets/nivel1.json")
        this.load.image("barco", "images/barco.png")

        this.load.image("boton_jugar", "images/boton_jugar.png");
        this.load.image("main_menu", "images/main_menu.png")
        this.load.image("boton_creditos", "images/boton_creditos.png");
        this.load.image("boton_informacion", "images/boton_informacion.png");
        this.load.image("boton_tutorial", "images/boton_tutorial.png");
        this.load.image("tutorial", "images/tutorial.png")
        this.load.image("creditos", "images/creditos.png")
        this.load.image("boton_volver", "images/boton_volver.png")
        this.load.image("informacion", "images/informacion.png")
        this.load.image("tuerca", "images/tuerca.png")
        this.load.image("menu_ingame", "images/menu_ingame.png")
        this.load.image("boton_tutorial2", "images/boton_tutorial2.png")
        this.load.image("boton_reanudar", "images/boton_reanudar.png")
        this.load.image("boton_salir", "images/boton_salir.png")




        this.load.image("leftcap", "images/leftcap.png")
        this.load.image("midcap", "images/midcap.png")
        this.load.image("rightcap", "images/rightcap.png")
    }

    create()
    {
        this.scene.start("menu")
    }
}