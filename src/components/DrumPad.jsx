import { useRef } from "react";

const DrumPad = ({ clip }) => {
	const audioRef = useRef(null);

	const playSound = () => audioRef.current.play();

	return (
		<button
			id={clip.filename}
			type="button"
			className="drum-pad"
			onClick={playSound}
		>
			{clip.trigger}
			<audio id={clip.trigger} className="clip" ref={audioRef}>
				<source src={`/sounds/${clip.filename}.wav`} type="audio/mpeg" />
			</audio>
		</button>
	);
};

export default DrumPad;
