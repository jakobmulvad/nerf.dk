import React, { useState, useEffect, useRef } from 'react';
import FluidRenderer from '../js-fluid-renderer';

const FluidBackground = () => {
	const canvasRef = useRef(null);
	const [width, setWidth] = useState(200);
	const [height, setHeight] = useState(200);

	useEffect(() => {
		const canvas:HTMLCanvasElement = canvasRef.current as HTMLCanvasElement;
		const fluids = new FluidRenderer(200, 200, canvas);

		const resize = () => {
			setWidth(canvas.clientWidth);
			setHeight(canvas.clientHeight);
		}
		window.addEventListener('resize', resize);
		resize();

		let lastFrame = 0;
		(function renderLoop(time: number) {
			const dt = (time - lastFrame) * 0.001;
			fluids.render(dt);
			requestAnimationFrame(renderLoop);
			lastFrame = time;
		})(0);

		setInterval(() => {
			const radius = 10;
			const diameter = radius*2;
			const startX = Math.floor((fluids.solver.width - diameter) * Math.random());
			const startY = Math.floor((fluids.solver.height - diameter) * Math.random());

			for (let x = startX; x < startX + diameter; x++) {
				for (let y = startY; y < startY + diameter; y++) {
					const dx = startX + radius - x;
					const dy = startY + radius - y;
					const ds = Math.max(1 - (dx * dx + dy * dy) / (radius * radius), 0);

					fluids.solver.setCellState(x, y, ds, ds * (1 * Math.random()-0.5), ds * (1 * Math.random()-0.5));
				}
			}
		}, 1000);

	}, [])

	return <canvas id="fluid-background" ref={canvasRef} width={width} height={height}/>;
}

export default FluidBackground