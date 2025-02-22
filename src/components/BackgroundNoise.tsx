import React, { useEffect } from 'react';

interface BackgroundNoiseProps {
	opacity?: number;
}

const BackgroundNoise: React.FC<BackgroundNoiseProps> = ({ opacity = 1 }) => {
	useEffect(() => {
		const canvas = document.getElementById('noise') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const generateNoise = () => {
			const imageData = ctx.createImageData(canvas.width, canvas.height);
			const buffer32 = new Uint32Array(imageData.data.buffer);

			for (let i = 0; i < buffer32.length; i++) {
				const gray = Math.random() * 255; // Random grayscale value (0 to 255)
				const alpha = 255; // Full opacity

				buffer32[i] = (alpha << 24) | (gray << 16) | (gray << 8) | gray;
			}

			ctx.putImageData(imageData, 0, 0);
		};

		const render = () => {
			setTimeout(() => {
				generateNoise();
				requestAnimationFrame(render);
			}, 100); // Slow down with a 100ms delay
		};

		render();
	}, []);

	return (
		<canvas
			id="noise"
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				pointerEvents: 'none',
				zIndex: 10,
				opacity: opacity,
				transition: 'opacity 0.1s ease-out, z-index 0s ease-out',
			}}
		></canvas>
	);
};

export default BackgroundNoise;
