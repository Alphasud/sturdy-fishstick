import React from 'react';
import { useTexts } from '../context/TextProvider';

const Footer = () => {
	const { footer } = useTexts();
	return (
		<small>
			{footer.by}{' '}
			<cite>
				<a target="_blank" href={footer.link}>
					{footer.name}
				</a>
			</cite>
			. {footer.rights}
		</small>
	);
};
export default Footer;
