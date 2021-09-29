// import Phaser, { Scene } from "phaser"
// // import StateMachine from "stateMachine/stateMachine"
// export default class PlayerController
// {
//     private barco: Phaser.Physics.Arcade.Sprite
//     private stateMachine: StateMachine
//     private cursores!: Phaser.Events.EventEmitter
//     public target = new Phaser.Math.Vector2()

//     physics: any
    
//     constructor(barco: Phaser.Physics.Arcade.Sprite, cursores: Phaser.Events.EventEmitter){

//         this.barco = barco  
//         this.stateMachine = new StateMachine(this, "player")

//         this.stateMachine.addState("idle",{
//             onEnter: this.idleOnEnter
//         })
//         .addState("walk",{
//             onEnter: this.walkOnEnter,
//             onUpdate: this.walkOnUpdate,
//         })
//         .setState("idle")
//     }

//     update(dt: number){
//         this.stateMachine.update(dt)
//     }

//     private idleOnEnter(){


//     }

//     private walkOnEnter(){

//     }

//     private walkOnUpdate(){
        
//         this.cursores.on("pointerdown",(pointer: { x: number; y: number }) => {

//             this.target.x = pointer.x;
//             this.target.y = pointer.y;
//             this.physics.moveToObject(this.barco, this.target, 200);
//             var angle = Phaser.Math.RAD_TO_DEG * Phaser.Math.Angle.Between(this.barco.x, this.barco.y, pointer.x, pointer.y);
//             this.barco.setAngle(angle +90);
            
//         }, this);

//         if(this.barco.x = this.barco.y)
//         this.stateMachine.setState("idle")
//     }
// }