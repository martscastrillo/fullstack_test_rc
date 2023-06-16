
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
			console.log(dataObj);
			return dataObj;
		});
};
const getHistoric = () => {
	return fetch("http://localhost:4000/historic")
		.then((response) => response.json())
		.then((dataObj) => {
			return dataObj;
		});
};

const objToExport = {
	sendFormApi: sendFormApi,
	getHistoric: getHistoric,
};

export default objToExport;
