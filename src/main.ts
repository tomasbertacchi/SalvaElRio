import Phaser from 'phaser'
import preloader from './scenes/preloader'
import tutorial from './scenes/tutorial'
import mainmenu from './scenes/mainmenu'
import creditos from './scenes/creditos'
import informacion from './scenes/informacion'
import game from './scenes/game'
import UIscene from './scenes/UIscene'
import menuingame from './scenes/menuingame'



const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
		parent: '',
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1920,
		height: 1080
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: true,
		}
	},
	scene: [preloader, mainmenu, tutorial, informacion, creditos, game, UIscene, menuingame]
}

export default new Phaser.Game(config)
