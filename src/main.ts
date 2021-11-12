import 'regenerator-runtime/runtime'
import Phaser from 'phaser'
import preloader from './scenes/preloader'
import tutorial from './scenes/tutorial'
import mainmenu from './scenes/mainmenu'
import creditos from './scenes/creditos'
import informacion from './scenes/informacion'
import game from './scenes/game'
import UIscene from './scenes/UIscene'
import menuingame from './scenes/menuingame'
import gananivel from './scenes/gananivel1'
import pierdenivel from './scenes/pierdenivel1'
import idioma from './scenes/idioma'
import prepreloader from "./scenes/prepreloader"
import unraf from "./scenes/unraf"

localStorage.clear();


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
			debug: false,
		}
	},
	scene: [unraf,prepreloader,preloader, idioma, mainmenu, tutorial, informacion, creditos, game, UIscene, menuingame, gananivel, pierdenivel]
}

export default new Phaser.Game(config)
