import DrumPad from "./components/DrumPad";
import clips from "./clips";

const App = () => {
	return (
		<div id="drum-machine" className="container">
			<div id="display">Display</div>
			<div id="drum-pads">
				{clips.map((clip, index) => {
					return <DrumPad key={`clip${index}`} clip={clip} />;
				})}
			</div>
		</div>
	);
};

export default App;
