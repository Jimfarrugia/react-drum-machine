import { useState } from "react";
import DrumPad from "./components/DrumPad";
import clips from "./clips";

const App = () => {
	const [currentClip, setCurrentClip] = useState(null);

	return (
		<div id="drum-machine" className="container">
			<div id="display">{currentClip || ""}</div>
			<div id="drum-pads">
				{clips.map((clip, index) => (
					<DrumPad
						key={`clip${index}`}
						clip={clip}
						setCurrentClip={setCurrentClip}
					/>
				))}
			</div>
		</div>
	);
};

document.addEventListener("keydown", e => {
	const id = e.key.toUpperCase();
	const audio = document.getElementById(id);

	if (audio) {
		const parent = audio.parentNode;
		parent.classList.add("active");

		audio.play();

		audio.addEventListener("ended", () => {
			parent.classList.remove("active");
		});
	}
});

export default App;
