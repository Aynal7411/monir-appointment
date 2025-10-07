import React, { useState, useEffect } from "react";

// Petal Component
const Petal = ({ rotate, hover, spinAngle }) => (
  <div
    style={{
      width: "60px",
      height: "100px",
      backgroundColor: hover ? "hotpink" : "pink",
      borderRadius: "50% 50% 50% 50%",
      position: "absolute",
      transform: `rotate(${rotate + spinAngle}deg) translateY(-50px)`,
      transformOrigin: "bottom center",
      transition: "background-color 0.3s",
    }}
  ></div>
);

// Center Component
const Center = ({ size }) => (
  <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "yellow",
      borderRadius: "50%",
      position: "absolute",
      top: `${50 - size / 2 + 25}px`,
      left: `${50 - size / 2 + 25}px`,
      zIndex: 1,
      transition: "width 0.3s, height 0.3s, top 0.3s, left 0.3s",
    }}
  ></div>
);

// Stem Component
const Stem = ({ size }) => (
  <div
    style={{
      width: `${size / 5}px`,
      height: `${size * 3}px`,
      backgroundColor: "green",
      position: "absolute",
      top: `100px`,
      left: `70px`,
      transition: "height 0.3s, width 0.3s",
    }}
  ></div>
);

// Flower Component
const Flower = () => {
  const [hover, setHover] = useState(false);
  const [grow, setGrow] = useState(false);
  const [spinAngle, setSpinAngle] = useState(0);

  const petalAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const flowerSize = grow ? 80 : 50;

  // Spin animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSpinAngle((prev) => prev + 2); // 2 degrees per tick
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "300px",
        margin: "50px auto",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setGrow(!grow)}
    >
      {/* Petals */}
      {petalAngles.map((angle, idx) => (
        <Petal key={idx} rotate={angle} hover={hover} spinAngle={spinAngle} />
      ))}

      {/* Center */}
      <Center size={flowerSize} />

      {/* Stem */}
      <Stem size={flowerSize} />
    </div>
  );
};

// App Compone

export default Flower;