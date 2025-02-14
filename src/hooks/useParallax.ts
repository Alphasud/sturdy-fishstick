import { useEffect, useState } from 'react';

const useParallax = (sensitivity = 50) => {
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		const moveX = (clientX - centerX) / sensitivity;
		const moveY = (clientY - centerY) / sensitivity;

		setOffset({ x: moveX, y: moveY });
	};

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return { offset };
};

export default useParallax;
