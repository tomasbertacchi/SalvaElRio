import Phaser from "phaser"
import StateMachine from "~/statemachine/statemachine"
export default class PlayerController
{
    private barco: Phaser.Physics.Arcade.Sprite
    private scene: Phaser.Scene
    private stateMachine: StateMachine
    private cursores: Phaser.Types.Input.Keyboard.CursorKeys
    private pointer: any
    private target: any

    constructor(scene: Phaser.Scene, barco: Phaser.Physics.Arcade.Sprite, cursores: Phaser.Types.Input.Keyboard.CursorKeys){
        this.scene = scene
        this.barco = barco  
        this.cursores = cursores
        this.pointer = scene.input.activePointer;
        this.stateMachine = new StateMachine(this, "player")

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
        console.log("hola")
    }

    private idleOnUpdate(){
        if (this.pointer.isDown){
            this.target = new Phaser.Math.Vector2(this.pointer.x, this.pointer.y)

            var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.barco.x, this.barco.y, this.pointer.x, this.pointer.y);
            this.barco.setAngle(angle +90);
            this.scene.physics.moveToObject(this.barco, this.target, 200);

            this.stateMachine.setState("walk")
        }
        
    }

    private walkOnEnter(){

    }

    private walkOnUpdate(){
        console.log("hola")
        var distance = Phaser.Math.Distance.Between(this.barco.x, this.barco.y, this.target.x, this.target.y);
        if (distance < 4)
        {
            this.barco.body.reset(this.target.x, this.target.y);
        }
    }
}