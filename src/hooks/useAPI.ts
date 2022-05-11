import axios from 'axios';

function useAPI(): any {
	const API: any = axios.create({
		baseURL: process.env.REACT_APP_API_URL || '',
		headers: {
			Authorization: '',
		},
	});

	const test = {
		getAll: () => API.get('/test'),
	};

	return [
		{
			API,
			test,
		},
	];
}

export default useAPI;
