import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";




const App = () => {
	const [dataForm, setDataForm] = useState({
		value1: "holi",
		value2: "holita",
	});
	const [contador, setContador] = useState(1);
	/* const [dataArray, setDataArray] = useState([]);
	const [inputValues, setInputValues] = useState({});
	const [result, setResult] = useState(0); */
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

	};
	const [inputs, setInputs] = useState([]);

	const agregarInput = () => {
		setInputs([...inputs, '']);
		setContador(contador + 1);
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
				

				{inputs.map((value, index) => (
					<fieldset className="superbox__form__fieldset">
					<label htmlFor="value1">value 1</label>
					<input
						id={`value${contador}`}
						placeholder={`value ${index}`}
						key={index}
						value={value}
						onChange={(event) => handleChange(index, event)}
					/>
				</fieldset>
					
				))}
				<button type="button" onClick={agregarInput}>
					Añadir Input
				</button>
			</form>

			<div className="superbox__results">
				{/* 				<h2>history results: {`${result}`}</h2>
 */}
			</div>
		</div>
	);
};

export default App;
