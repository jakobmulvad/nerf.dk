import React, { useRef, useEffect, useState } from "react";
import WebGLFluidRenderer from "../webgl-fluid-renderer";

const WebGLCanvas = () => {
  const canvasRef = useRef(null);

  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;

    const resize = () => {
      setWidth(canvas.clientWidth);
      setHeight(canvas.clientHeight);
    };
    window.addEventListener("resize", resize);
    resize();

    const renderer = new WebGLFluidRenderer(canvas);

    function renderLoop(time: number) {
      renderer.render(time);
      requestAnimationFrame(renderLoop);
    }
    requestAnimationFrame(renderLoop);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: -1
      }}
    />
  );
};

export default WebGLCanvas;
