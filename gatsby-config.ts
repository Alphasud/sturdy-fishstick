import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Charles Denneulin`,
		siteUrl: `https://www.charlesdenneulin.com`,
		description: `Charles Denneulin's personal website`,
		author: `Charles Denneulin`,
		keywords: [
			`Charles Denneulin`,
			`Web Developer`,
			`Portfolio`,
			`Personal Website`,
		],
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: ['gatsby-plugin-image', 'gatsby-plugin-sharp'],
};

export default config;
