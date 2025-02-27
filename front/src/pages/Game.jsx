import React, { useState, useEffect } from 'react';

const cubeSize = 100; // Assumed size of the cube in pixels

const Game = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });
  const [color, setColor] = useState("red");

  useEffect(() => {
    const moveCube = () => {
      setPosition((prevPosition) => {
        const nextX = prevPosition.x + direction.x * 8;
        const nextY = prevPosition.y + direction.y * 8;

        const gameArea = document.querySelector(".Game");
        

        if (!gameArea) return prevPosition;

        const { clientWidth, clientHeight } = gameArea;

        let newDirectionX = direction.x;
        let newDirectionY = direction.y;
        let newColor = color;

        if (nextX <= 0 || nextX + cubeSize >= clientWidth) {
          newDirectionX *= -1;
          newColor = getRandomColor();
        }

        if (nextY <= 0 || nextY + cubeSize >= clientHeight) {
          newDirectionY *= -1;
          newColor = getRandomColor();
        }

        setDirection({ x: newDirectionX, y: newDirectionY });
        setColor(newColor);

        return { x: nextX, y: nextY };
      });
    };

    const interval = setInterval(moveCube, 50);
    return () => clearInterval(interval);
  }, [direction, color]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="Game" style={{ position: "relative", width: window.innerWidth-1, height: window.innerHeight-1,backgroundColor:'black'}}>
      <div
        className="Cube"
        style={{
          position: "absolute",
          width: `${cubeSize}px`,
          height: `${cubeSize}px`,
          backgroundColor: color,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></div>
    </div>
  );
};

export default Game;