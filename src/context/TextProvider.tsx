import React, { createContext, useContext } from 'react';

interface Texts {
	heading: string;
	description: string;
	footer: { by: string; name: string; rights: string };
}

const defaultTexts: Texts = {
	heading: 'Charles Denneulin',
	description: 'Web Developer',
	footer: {
		by: 'Stream provided by',
		name: 'NTS Radio',
		rights: 'All rights belong to their respective owners.',
	},
};

const TextContext = createContext<Texts>(defaultTexts);

export const useTexts = () => {
	return useContext(TextContext);
};

export const TextProvider: React.FC<React.PropsWithChildren<{}>> = ({
	children,
}) => {
	return (
		<TextContext.Provider value={defaultTexts}>
			{children}
		</TextContext.Provider>
	);
};
