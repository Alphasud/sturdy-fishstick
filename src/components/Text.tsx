import React from 'react';
interface TextProps {
	content: string;
}

const Text: React.FC<TextProps> = ({ content }: TextProps) => {
	return <h1 className="text">{content}</h1>;
};

export default Text;
