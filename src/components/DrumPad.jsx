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
			<audio id={trigger} className="clip" ref={audioRef}>
				<source src={`/sounds/${filename}.wav`} type="audio/mpeg" />
			</audio>
		</button>
	);
};

export default DrumPad;
