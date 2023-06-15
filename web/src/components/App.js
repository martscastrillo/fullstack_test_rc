import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";


const App = () => {
	const [inputs, setInputs] = useState([]);
	const [array, setArray] = useState([]);
	const [currentResult, setCurrentResult] = useState(0);
	const [historicResults, setHistoricResults] = useState([]);
	const sendFormApi = (data) => {
		apiData.sendFormApi(data).then((response) => {
			console.log(response);
			console.log('pasa por aqui');
			if (response) {
				setArray(response.array);
				setCurrentResult(response);
				setHistoricResults([...historicResults, response]);
				console.log(historicResults);
				return response;
			}
		});
		
	};
	
	const handleSubmit = (ev) => {
		ev.preventDefault();
		sendFormApi(array);
	};

	const agregarInput = () => {
		setInputs([...inputs, '']);
	  };

	const handleChange = (index, event) => {
		const nuevosInputs = [...inputs];
		nuevosInputs[index] = event.target.value;
		setInputs(nuevosInputs);
		setArray(nuevosInputs);
	};
	return (
		<div className="superbox">
			<h1 className="superbox__h1">full stack test</h1>
			<form action="" className="superbox__h1" onSubmit={handleSubmit}>
				{inputs.map((value, index) => {
					
					return(
					<fieldset className="superbox__form__fieldset" key={index}>
					<label htmlFor={`value ${index}`}>{`value ${index}`}</label>
					<input
						id={`value${index}`}
						placeholder={`value ${index}`}
						value={value}
						onChange={(event) => handleChange(index, event)}
					/>
				</fieldset>
					
				)})}
				
				<div className="superbox__form__extradiv">
				<button type="button" onClick={agregarInput} className="superbox__form__addinput">
					Add Input
				</button>
					<input
						className="superbox__form__submit"
						type="submit"
						value="Submit"
					/>
					<button type="button" onClick={agregarInput} className="superbox__form__reset">
					Reset
				</button>
				</div>
			</form>

			<div className="superbox__results">
								<h2>current result: {`${currentResult}`}</h2>

			</div>
			<div className="superbox__results">
								<h2>historic results: {`${historicResults}`}</h2>

			</div>
		</div>
	);
};

export default App;
