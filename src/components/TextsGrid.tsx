import React from 'react';
import Text from './Text';
import { useTexts } from '../context/TextProvider';
import Socials from './Socials';
import AudioPlayer from './AudioPlayer';

const TextGrid: React.FC = () => {
	const { heading, description, footer } = useTexts();
	return (
		<div
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				left: 0,
				top: 0,
				display: 'grid',
				gridTemplateColumns: 'repeat(7, 1fr)',
				gridTemplateRows: 'repeat(5, 1fr)',
				gridColumnGap: '0px',
				gridRowGap: '0px',
			}}
		>
			<div
				style={{
					gridArea: '2 / 2 / 3 / 7',
					alignSelf: 'center',
				}}
			>
				<Text content={heading} />
			</div>
			<div
				style={{
					gridArea: '3 / 3 / 4 / 6',
					alignSelf: 'center',
				}}
			>
				<Text content={description} />
			</div>

			<div
				style={{
					gridArea: '5 / 6 / 6 / 8',
					alignSelf: 'end',
					paddingBottom: '20px',
					paddingRight: '20px',
				}}
			>
				<Socials />
			</div>
			<div
				style={{
					gridArea: '1 / 1 / 2 / 2',
					paddingTop: '20px',
					paddingLeft: '20px',
				}}
			>
				<AudioPlayer />
			</div>
			<div
				style={{
					gridArea: '5 / 1 / 6 / 3',
					alignSelf: 'end',
					paddingBottom: '20px',
					paddingLeft: '20px',
					color: 'white',
				}}
			>
				<small>
					{footer.by}{' '}
					<cite>
						<a
							style={{ color: 'white' }}
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
