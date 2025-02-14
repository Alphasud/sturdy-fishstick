import React from 'react';
interface TextProps {
	content: string;
	className?: string;
}

const Text: React.FC<TextProps> = ({ content, className }: TextProps) => {
	return <h1 className={`text ${className}`}>{content}</h1>;
};

export default Text;
