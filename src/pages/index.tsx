import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import BackgroundNoise from '../components/BackgroundNoise';
import GridLayout from '../layout/GridLayout';
import { TextProvider } from '../context/TextProvider';
import GhostTrailCursor from '../components/GhostTrailCursor';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

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
			<BackgroundNoise opacity={!loading ? 0.15 : 1} />
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

export const Head: HeadFC = () => {
	const { title, description, keywords, siteUrl, author } = useSiteMetadata();

	return (
		<>
			<html lang="en" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(', ')} />
			<meta name="author" content={author} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={`${siteUrl}/favicon.svg`} />
			<meta property="og:url" content={siteUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="en_US" />
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		</>
	);
};
