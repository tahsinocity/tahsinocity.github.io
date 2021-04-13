const axios = require('axios');

export async function getTimings() {
	await axios
		.get('http://api.aladhan.com/v1/timings/:date_or_timestamp', {
			params: {
				latitude: 40.7196897,
				longitude: -73.7622418,
				method: 2,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error('Error with response: ' + err);
		});
}
