import { useRef } from "react";

const DrumPad = ({ clip }) => {
	const audioRef = useRef(null);

	const playSound = () => audioRef.current.play();

	const { filename, trigger } = clip;

	return (
		<button
			id={filename}
			type="button"
			className="drum-pad"
			onClick={playSound}
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
