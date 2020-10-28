import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://run.mocky.io/v3/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export { instance as default };