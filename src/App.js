function App() {
	return (
		<div id="drum-machine" className="container">
			<div id="display">Display</div>
			<div id="drum-pads">
				<button id="closed-hat" type="button" className="drum-pad">
					Q
				</button>
				<button id="open-hat" type="button" className="drum-pad">
					W
				</button>
				<button id="kick" type="button" className="drum-pad">
					E
				</button>
				<button id="snare1" type="button" className="drum-pad">
					A
				</button>
				<button id="snare2" type="button" className="drum-pad">
					S
				</button>
				<button id="clap" type="button" className="drum-pad">
					D
				</button>
				<button id="tom" type="button" className="drum-pad">
					Z
				</button>
				<button id="low-tom" type="button" className="drum-pad">
					X
				</button>
				<button id="clave" type="button" className="drum-pad">
					C
				</button>
			</div>
		</div>
	);
}

export default App;
