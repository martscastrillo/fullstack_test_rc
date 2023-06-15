const convertNumbers = (array) => {
	return array.map((element) => {
		if (!isNaN(element)) {
			return Number(element);
		} else {
			return element;
		}
	});
};

const checkAllNumbers = (array) => {
	return array.every((element) => typeof element === "number");
};

const addArray = (array) => {
	let total = 0;
	array.forEach((elemento) => {
		total += elemento;
	});
	return total;
};

const checkArray = (array) => {
	const arr = convertNumbers(array);
	if (checkAllNumbers(arr)) {
		return addArray(arr);
	}
	else{
		return 'hey'
	}
};


const sendFormApi = (data) => {
	return fetch("http://localhost:4000/calc", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((dataObj) => {
			let filteredResults = checkArray(dataObj);
			console.log("Server response:", filteredResults);
			return filteredResults;
		});
};

const objToExport = {
	sendFormApi: sendFormApi,
};

export default objToExport;
