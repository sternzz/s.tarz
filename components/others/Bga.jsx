"use client";

import React, { useEffect, useRef } from "react";

const Bga = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const TOTAL = 10;
    const petalArray = [];

    const petalImg = new window.Image();
    // petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";
    petalImg.src = "/assets/images/bg/bg-floating-dot.svg";

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);

    class Petal {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.w = 15 + Math.random();
        this.h = this.w;
        this.opacity = this.w / 10;
        this.xSpeed = Math.random() / 0.5;
        this.ySpeed = Math.random() / 0.5;
      }

      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(petalImg, this.x, this.y);
      }

      animate() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.draw();
      }
    }

    petalImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      render();
    };

    let animationFrameId;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach((petal) => petal.animate());
      animationFrameId = requestAnimationFrame(render);
    }

    console.log(petalArray);

    return () => {
      window.addEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10 opacity-50 "
    />
  );
};

export default Bga;
