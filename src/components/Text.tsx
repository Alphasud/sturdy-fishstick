import React from 'react';

const titleStyles: React.CSSProperties = {
	color: 'rgb(107, 255, 15)',
	textAlign: 'center',
	fontSize: '3rem',
};

interface TextProps {
	content: string;
}

const Text: React.FC<TextProps> = ({ content }: TextProps) => {
	return (
		<h1 className="press-start-2p" style={titleStyles}>
			{content}
		</h1>
	);
};

export default Text;
