import apiData from "../services/api";
import { useState } from "react";
import "../stylesheets/App.scss";




const App = () => {
	const [dataForm, setDataForm] = useState({
		value1: "holi",
		value2: "holita",
	});
	const [dataArray, setDataArray] = useState([]);
	const [inputValues, setInputValues] = useState({});
	const [result, setResult] = useState(0);
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
	
	return (
		<div className="superbox">
			<h1 className="superbox__h1">full stack test</h1>
			<form action="" className="superbox__h1" onSubmit={handleSubmit}>
				<fieldset className="superbox__form__fieldset">
					<label htmlFor="value1">value 1</label>
					<input
						id="value1"
						placeholder="value 1"
						name="input1"
						value={inputValues.input1 || ""}
					
					/>
				</fieldset>
				<fieldset className="superbox__form__fieldset">
					<label htmlFor="value2">value 2</label>
					<input
						id="value2"
						placeholder="value 2"
						name="input2"
						value={inputValues.input2 || ""}
			
					/>
				</fieldset>
				<fieldset className="superbox__form__fieldset">
					<label htmlFor="value3">value 3</label>
					<input
						type="text"
						id="value3"
						placeholder="value 3"
						name="input3"
						value={inputValues.input3 || ""}
					
					/>
				</fieldset>
				<fieldset className="superbox__form__fieldset">
					<label htmlFor="">value 4</label>
					<input
						type="text"
						placeholder="value 4"
						id="value4"
						name="input4"
						value={inputValues.input4 || ""}
					/>
				</fieldset>
				<div className="superbox__form__extradiv">
					<input
						className="superbox__form__submit"
						type="submit"
						value="Submit"
					/>

				</div>
			</form>

			<div className="superbox__results">
				<h2>history results: {`${result}`}</h2>
			
			</div>
		</div>
	);
};

export default App;
