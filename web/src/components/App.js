import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";




const App = () => {
	const [dataForm, setDataForm] = useState({
		value1: "holi",
		value2: "holita",
	});
	const [inputs, setInputs] = useState([]);
	const [inputValues, setInputValues] = useState([]);




	const sendFormApi = (data) => {
		apiData.sendFormApi(data).then((response) => {
			if (response) {
				setDataForm(response.dataForm);
			}
		});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		sendFormApi(dataForm);
		setInputValues({});
	};

	const agregarInput = () => {
		setInputs([...inputs, '']);
	  };

	const handleChange = (index, event) => {
		const nuevosInputs = [...inputs];
		nuevosInputs[index] = event.target.value;
		setInputs(nuevosInputs);
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
						value={inputValues[index] || ""}
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
