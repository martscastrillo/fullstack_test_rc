import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";


const App = () => {
	const [inputs, setInputs] = useState([]);
	const [array, setArray] = useState([]);

	const sendFormApi = (data) => {
		apiData.sendFormApi(data).then((response) => {
			if (response) {
				setArray(response.array);
				console.log(setArray(response.array));
			}
		});
		
	};
	
	const handleSubmit = (ev) => {
		ev.preventDefault();
		sendFormApi(array);
		console.log(sendFormApi(setArray(array)));
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
					Añadir Input
				</button>
					<input
						className="superbox__form__submit"
						type="submit"
						value="Submit"
					/>
				</div>
			</form>

			<div className="superbox__results">
				{/* 				<h2>history results: {`${result}`}</h2>
 */}
			</div>
		</div>
	);
};

export default App;
