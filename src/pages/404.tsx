import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import BackgroundNoise from '../components/BackgroundNoise';
import GhostTrailCursor from '../components/GhostTrailCursor';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main className="not-found">
			<BackgroundNoise opacity={0.25} />
			<GhostTrailCursor />
			<h1>Page not found</h1>
			<p className="no-cursor-trail">
				<Link to="/">Go home</Link>.
			</p>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => {
	const { title } = useSiteMetadata();

	return (
		<>
			<html lang="en" />
			<title>{title} | Not found</title>
			<link rel="icon" href="/favicon_404.svg" type="image/svg+xml" />
		</>
	);
};
