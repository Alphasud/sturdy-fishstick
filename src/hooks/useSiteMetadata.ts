import { graphql, useStaticQuery } from 'gatsby';

type SiteMetadata = {
	title: string;
	description: string;
	siteUrl: string;
	author: string;
	keywords: string[];
};

type SiteMetadataQuery = {
	site: {
		siteMetadata: SiteMetadata;
	};
};

export const useSiteMetadata = (): SiteMetadata => {
	const data = useStaticQuery<SiteMetadataQuery>(graphql`
		query SiteMetadata {
			site {
				siteMetadata {
					title
					description
					siteUrl
					author
					keywords
				}
			}
		}
	`);

	return data.site.siteMetadata;
};
