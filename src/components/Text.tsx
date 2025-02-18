import React from 'react';
interface TextProps {
	content: string;
	className?: string;
}

const Text: React.FC<TextProps> = ({ content, className }: TextProps) => {
	const getCSSClasses: string = className ? `text ${className}` : 'text';
	return <h1 className={getCSSClasses}>{content}</h1>;
};

export default Text;
