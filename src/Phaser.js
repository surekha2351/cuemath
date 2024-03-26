import Phaser from "phaser"
import ChessScene from "../src/scenes/ChessScene/ChessScene.js"

// Phaser game configuration
const config = {
    type: Phaser.AUTO,
    parent: "app",
    height: 640,
    width: 360,
    backgroundColor: "#000000",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: ChessScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

// Initialize the Phaser game with the configuration
const game = new Phaser.Game(config)

export default game
