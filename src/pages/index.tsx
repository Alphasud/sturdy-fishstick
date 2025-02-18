import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import BackgroundNoise from '../components/BackgroundNoise';
import GridLayout from '../layout/GridLayout';
import { TextProvider } from '../context/TextProvider';
import GhostTrailCursor from '../components/GhostTrailCursor';
import { StaticImage } from 'gatsby-plugin-image';

const pageStyles: React.CSSProperties = {
	width: '100%',
	height: '100vh',
	overflow: 'hidden',
	position: 'relative',
};

const IndexPage: React.FC<PageProps> = () => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<main style={pageStyles}>
			<GhostTrailCursor />
			<BackgroundNoise opacity={!loading ? 0.125 : 1} />
			<div
				style={{
					height: '100%',
					visibility: loading ? 'hidden' : 'visible',
				}}
			>
				<TextProvider>
					<GridLayout />
				</TextProvider>
			</div>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>🌞 Charles Denneulin</title>;
