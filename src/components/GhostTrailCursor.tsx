import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
	const [svgContent, setSvgContent] = useState<string>('');

	const cursorSvg = `<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="white"  strokelinecap="round" strokelinejoin="round" width={12} height={12}  strokeWidth={2}> <path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z"></path> </svg> `;

	useEffect(() => {
		setSvgContent(cursorSvg);
	}, []);

	useEffect(() => {
		const trailElements: SVGElement[] = [];

		const handleMouseMove = (e: MouseEvent) => {
			const trailElement = document.createElement('div');
			trailElement.innerHTML = svgContent;
			const svgElement = trailElement.firstChild as SVGElement;

			svgElement.style.position = 'absolute';
			svgElement.style.width = '23px';
			svgElement.style.height = '23px';
			svgElement.style.pointerEvents = 'none';
			svgElement.style.left = `${e.pageX - 16}px`;
			svgElement.style.top = `${e.pageY - 16}px`;
			svgElement.style.transition =
				'opacity 0.5s ease-out, transform 0.2s ease-out';
			svgElement.style.zIndex = '9999';

			document.body.appendChild(svgElement);
			trailElements.push(svgElement);

			setTimeout(() => {
				svgElement.style.opacity = '0';
				setTimeout(() => {
					svgElement.remove();
				}, 500);
			}, 100);
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			trailElements.forEach((trailElement) => trailElement.remove());
		};
	}, [svgContent]);

	return null;
};

export default CursorTrail;
