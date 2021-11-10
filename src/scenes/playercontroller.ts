import Phaser from "phaser"
import StateMachine from "../stateMachine/stateMachine"
export default class PlayerController
{
    private barco: Phaser.Physics.Arcade.Sprite
    private scene: Phaser.Scene
    private stateMachine: StateMachine
    private cursores: Phaser.Types.Input.Keyboard.CursorKeys
    private pointer: any
    private target: any
    private firstClick = true

    constructor(scene: Phaser.Scene, barco: Phaser.Physics.Arcade.Sprite, cursores: Phaser.Types.Input.Keyboard.CursorKeys){
        this.scene = scene
        this.barco = barco  
        this.cursores = cursores
        this.pointer = scene.input.activePointer;
        this.stateMachine = new StateMachine(this, "player")
        this.target = new Phaser.Math.Vector2()

        this.stateMachine.addState("idle",{
            onEnter: this.idleOnEnter,
            onUpdate: this.idleOnUpdate

        })
        .addState("walk",{
            onEnter: this.walkOnEnter,
            onUpdate: this.walkOnUpdate
        })
        .setState("idle")
    }

    update(dt: number){
        this.stateMachine.update(dt)
    }

    private idleOnEnter(){  
        console.log("idleOnEnter")
        this.barco.setVelocity(0,0)
    }

    private idleOnUpdate(){

        if (this.pointer.isDown && !this.firstClick){
            console.log('clic')
            this.target.x = this.pointer.x
            this.target.y = this.pointer.y
            this.stateMachine.setState("walk")
        }

        if(this.target.y < 160){
            this.barco.setVelocity(0,0)
            this.stateMachine.setState("idle")
        }    
        else if (this.target.y > 970){
            this.stateMachine.setState("idle")
        }
        this.firstClick = false
        
    }

    private walkOnEnter(){
        console.log("walkOnEnter")
    }

    private walkOnUpdate(){
        var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.barco.x, this.barco.y, this.target.x, this.target.y);
        this.barco.setAngle(angle+90);
        var distance = Phaser.Math.Distance.Between(this.barco.x, this.barco.y, this.target.x, this.target.y);
        //console.log('distancia '+ distance)
        //console.log('target '+ this.target.x+ ' '+ this.target.y)
        //console.log('barco '+ this.barco.x +' '+ this.barco.y)

        if (this.barco.body.touching){
            this.stateMachine.setState("idle")
        }

        if (distance > 5) {
            this.scene.physics.moveTo(this.barco, this.target.x, this.target.y, 200);
            this.stateMachine.setState("walk")
        } else {
            this.barco.setVelocity(0,0)
            this.stateMachine.setState("idle")
        }

        
    }
}