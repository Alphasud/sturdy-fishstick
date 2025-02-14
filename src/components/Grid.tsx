import React from 'react';
import Text from './Text';
import { useTexts } from '../context/TextProvider';
import Socials from './Socials';
import AudioPlayer from './AudioPlayer';
import useParallax from '../hooks/useParallax';
import { StaticImage } from 'gatsby-plugin-image';

const TextGrid: React.FC = () => {
	const { heading, description, footer } = useTexts();
	const { offset } = useParallax(50);
	const divStyles: React.CSSProperties = {
		transform: `translate(${offset.x}px, ${offset.y}px)`,
	};
	return (
		<div className="grid">
			<div className="grid_background" style={divStyles}>
				<StaticImage
					src="../images/computer.webp"
					alt="an pixel art style drawing of a restro computer"
					className="image"
					layout="fullWidth"
					loading="eager"
					backgroundColor="transparent"
				/>
			</div>
			<div className="grid_heading">
				<Text content={heading} />
			</div>
			<div className="grid_description">
				<Text content={description} />
			</div>

			<div className="grid_socials">
				<Socials />
			</div>
			<div className="grid_audio_player">
				<AudioPlayer />
			</div>
			<div className="grid_footer">
				<small>
					{footer.by}{' '}
					<cite>
						<a
							target="_blank"
							href="https://www.nts.live/infinite-mixtapes/slow-focus"
						>
							{footer.name}
						</a>
					</cite>
					. {footer.rights}
				</small>
			</div>
		</div>
	);
};

export default TextGrid;
