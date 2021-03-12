import { useRef } from "react";

const DrumPad = ({ clip, setCurrentClip }) => {
	const audioRef = useRef(null);
	const { filename, trigger, name } = clip;
	const playSound = () => audioRef.current.play();

	return (
		<button
			id={filename}
			type="button"
			className="drum-pad"
			onClick={() => {
				playSound();
				setCurrentClip(name);
			}}
		>
			{trigger}
			<audio
				id={trigger}
				className="clip"
				ref={audioRef}
				src={`/sounds/${filename}.wav`}
			/>
		</button>
	);
};

export default DrumPad;
