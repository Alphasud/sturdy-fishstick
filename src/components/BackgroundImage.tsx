import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface BackgroundImageProps {
	offset: { x: number; y: number };
}

const BackgroundImage = ({ offset }: BackgroundImageProps) => {
	const divStyles: React.CSSProperties = {
		overflow: 'hidden',
		height: '100%',
		width: '100%',
		transform: `translate(${offset.x}px, ${offset.y}px)`,
		transition: 'transform 0.25s ease-out',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		zIndex: -2,
		backgroundColor: 'transparent',
	};

	const imageStyles: React.CSSProperties = {
		width: '30rem',
		height: '30rem',
		opacity: 0.75,
	};

	return (
		<div style={divStyles}>
			<StaticImage
				src="../images/computer.webp"
				alt="a computer"
				style={imageStyles}
				layout="fullWidth"
				loading="eager"
				backgroundColor="transparent"
			/>
		</div>
	);
};

export default BackgroundImage;
