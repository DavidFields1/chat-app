// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchUrl = async (endpoint, data, method) => {
	const url = `${baseUrl}${endpoint}`;

	if (method === 'GET') {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return await res.json();
	} else {
		const res = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return await res.json();
	}
};

export const fetchWithToken = async (endpoint, data, method) => {
	const url = `${baseUrl}${endpoint}`;

	const token = localStorage.getItem('token');

	if (method === 'GET') {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-token': token,
			},
		});
		return await res.json();
	} else {
		const res = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				'x-token': token,
			},
			body: JSON.stringify(data),
		});
		return await res.json();
	}
};
