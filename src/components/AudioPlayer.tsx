import React, { useRef, useState } from 'react';
import { useTexts } from '../context/TextProvider';
import MarqueeLink from './MarqueeLink';

const buttonStyles: React.CSSProperties = {
	background: 'none',
	border: 'none',
	cursor: 'pointer',
};

const CustomAudioPlayer = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(0.5);
	const { player } = useTexts();

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
				audioRef.current.volume = volume;
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
	};

	const toggleSound = () => {
		if (audioRef.current) {
			if (volume === 0) {
				audioRef.current.volume = 1;
				setVolume(1);
			} else {
				audioRef.current.volume = 0;
				setVolume(0);
			}
		}
	};

	return (
		<>
			<div className="audio_player">
				<audio
					ref={audioRef}
					src="https://stream-mixtape-geo.ntslive.net/mixtape/64.aac"
				/>

				<button style={buttonStyles} onClick={togglePlay}>
					{isPlaying ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="white"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							width={24}
							height={24}
							strokeWidth={0}
						>
							{' '}
							<path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>{' '}
							<path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>{' '}
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="white"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							width={24}
							height={24}
							strokeWidth={0}
						>
							{' '}
							<path d="M7 4v16l13 -8z"></path>{' '}
						</svg>
					)}
				</button>
				<div className="now_playing">
					<span>{player.nowPlaying}:</span>
					<MarqueeLink title={player.title} link={player.link} />
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<button style={buttonStyles} onClick={toggleSound}>
						{volume === 0 ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="white"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
								width={24}
								height={24}
								strokeWidth={2}
							>
								{' '}
								<path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>{' '}
								<path d="M16 10l4 4m0 -4l-4 4"></path>{' '}
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="white"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								width={24}
								height={24}
								strokeWidth={0}
							>
								{' '}
								<path d="M15 8a5 5 0 0 1 0 8"></path>{' '}
								<path d="M17.7 5a9 9 0 0 1 0 14"></path>{' '}
								<path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>{' '}
							</svg>
						)}
					</button>

					<input
						style={{ width: '5rem' }}
						type="range"
						min="0"
						max="1"
						step="0.01"
						value={volume}
						onChange={handleVolumeChange}
					/>
				</div>
			</div>
		</>
	);
};

export default CustomAudioPlayer;
