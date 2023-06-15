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
			console.log("Server response:", dataObj);
			console.log(	checkArray(dataObj));
		});
};

const objToExport = {
	sendFormApi: sendFormApi,
};

export default objToExport;
