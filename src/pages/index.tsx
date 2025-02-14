import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import BackgroundNoise from '../components/BackgroundNoise';
import BackgroundImage from '../components/BackgroundImage';
import useParallax from '../hooks/useParallax';
import TextGrid from '../components/TextsGrid';
import { TextProvider } from '../context/TextProvider';

const pageStyles: React.CSSProperties = {
	width: '100%',
	height: '100vh',
	overflow: 'hidden',
	position: 'relative',
};

const IndexPage: React.FC<PageProps> = () => {
	const { offset } = useParallax(50);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<main style={pageStyles}>
			<BackgroundNoise opacity={!loading ? 0.125 : 1} />
			<div
				style={{
					height: '100%',
					visibility: loading ? 'hidden' : 'visible',
				}}
			>
				<BackgroundImage offset={offset} />
				<TextProvider>
					<TextGrid />
				</TextProvider>
			</div>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>🌞 Charles Denneulin</title>;
