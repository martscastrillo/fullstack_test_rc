import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";

const App = () => {
	const [inputs, setInputs] = useState([]);
	const [array, setArray] = useState([]);
	const [currentResult, setCurrentResult] = useState(0);
	const [historicQueries, setHistoricQueries] = useState([]);
	const [error, setError] = useState("");

	const sendFormApi = (data) => {
		apiData.sendFormApi(data).then((response) => {
			if (response) {
				if (Number(response)) {
					setArray(response.array);
					setCurrentResult(response);
					setError("");
				} else {
					setError("ese valor no se sumará");
				}
				return response;
			}
		});
	};

	const historic = () => {
		apiData.getHistoric().then((response) => {
			return response;
		});
	};
	const handleSubmit = (ev) => {
		ev.preventDefault();
		console.log(sendFormApi(array));
		console.log(historic());
		let hasEmptyFields = false;
		array.forEach((item) => {
			if (item.name === "") {
				hasEmptyFields = true;
			}
		});
		if (!hasEmptyFields) {
			const filteredData = array.filter((item) => item !== '' && !isNaN(item));
		
			setHistoricQueries([...historicQueries, filteredData]);
		}
		else{
			setHistoricQueries([...historicQueries, array]);
		}
	};

	const agregarInput = () => {
		setInputs([...inputs, ""]);
	};
	const handleReset = (event) => {
		event.preventDefault();
		setCurrentResult(0);
		setHistoricQueries([]);
		setInputs([]);
		setError("");
	};
	const handleChange = (index, event) => {
		const nuevosInputs = [...inputs];
		nuevosInputs[index] = event.target.value;
		setInputs(nuevosInputs);
		setArray(nuevosInputs);
		if (!Number(event.target.value)) {
			setError("ese valor no se sumará");
		} else {
			setError("");
		}
	};
	return (
		<div className="superbox">
			<h1 className="superbox--h1">full stack test</h1>
			<form action="" className="superbox--h1" onSubmit={handleSubmit}>
				{inputs.map((value, index) => {
					return (
						<fieldset className="superbox--form__fieldset" key={index}>
							<label className="label"  htmlFor={`value ${index}`}>{`value ${index}`}</label>
							<input className="input" 
								id={`value${index}`}
								placeholder={`value ${index}`}
								value={value}
								onChange={(event) => handleChange(index, event)}
							/>
						</fieldset>
					);
				})}
				<p className="superbox--form__error">{error} </p>
				<div className="superbox--form__extradiv">
					<button
						type="button"
						onClick={agregarInput}
						className="superbox--form__addinput"
					>
						Add Input
					</button>
					<input
						className="superbox--form__submit"
						type="submit"
						value="Submit"
					/>
					<button
						type="button"
						onClick={handleReset}
						className="superbox--form__reset"
					>
						Reset
					</button>
				</div>
			</form>

			<div className="superbox--results">
				<h2>current result: {`${currentResult}`}</h2>
			</div>
			<div className="superbox--results">
				<h2>historic queries: {`${historicQueries}`}</h2>
			</div>
		</div>
	);
};

export default App;
