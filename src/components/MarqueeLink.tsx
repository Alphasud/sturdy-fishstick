import React from 'react';

const MarqueeLink = ({ title, link }: { title: string; link: string }) => {
	const repeatedTitle = Array(2).fill(title).join(' — ');

	return (
		<div className="marquee">
			<a className="player_link" href={link}>
				<span>{repeatedTitle}</span>
				<span>{repeatedTitle}</span>
			</a>
		</div>
	);
};

export default MarqueeLink;
