import React, { createContext, useContext } from 'react';

interface Texts {
	heading: string;
	description: string;
	footer: { by: string; name: string; link: string; rights: string };
	player: { nowPlaying: string; title: string; link: string };
}

const defaultTexts: Texts = {
	heading: 'Charles Denneulin',
	description: 'Web Developer',
	footer: {
		by: 'Stream provided by',
		name: 'NTS Radio',
		link: 'https://www.nts.live/',
		rights: 'All rights belong to their respective owners.',
	},
	player: {
		nowPlaying: 'Now playing',
		title: 'Slow Focus, Infinite Mixtapes',
		link: 'https://www.nts.live/infinite-mixtapes/slow-focus',
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
