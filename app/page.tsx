import Image from "next/image";

export default function Home() {
  return <>'use client' // This directive ensures the component is client-rendered

import { useState, useEffect, useRef } from 'react';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

export default function GamePage() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    // Game variables
    let player = { x: GAME_WIDTH / 2, y: GAME_HEIGHT - 30, width: 20, height: 20 };
    let enemies = [];
    
    // Game loop function
    const update = () => {
      // Game logic goes here:
      // Update player and enemy positions, check for collisions, etc.
    };
    
    const draw = () => {
      context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      
      // Draw player
      context.fillStyle = 'blue';
      context.fillRect(player.x, player.y, player.width, player.height);
      
      // Draw enemies
      context.fillStyle = 'red';
      enemies.forEach(enemy => {
        context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
      });
    };

    const gameLoop = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    // Start the game loop
    gameLoop();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-4">Score: {score}</h1>
      <canvas
        ref={canvasRef}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        className="border-2 border-black"
      />
    </div>
  );
}
</>;
}
