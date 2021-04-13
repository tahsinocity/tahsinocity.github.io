import './App.css';
import React, { useState, useEffect } from 'react';
import waving from '../src/dist/img/tenor.gif';
const axios = require('axios');

function App() {
	const [prayerData, setPrayerData] = useState(null);

	useEffect(() => {
		let getTimings = async () => {
			await axios
				.get('http://api.aladhan.com/v1/timings/:date_or_timestamp', {
					params: {
						latitude: 40.7196897,
						longitude: -73.7622418,
						method: 2,
					},
				})
				.then((response) => {
					setPrayerData(response.data.data);
				});
		};
		getTimings();
	}, []);

	let changeTo12 = (time) => {
		let hour = time.split(':');
		let times = ((parseInt(hour[0]) + 11) % 12) + 1;
		return `0${times}:${hour[1]}`;
	};

	return (
		<div className="App">
			<header className="App-header">
				{prayerData ? (
					<>
						<h1>Today is : {prayerData.date.readable}</h1>
						<h1>Stop Eating at : {prayerData.timings.Fajr} AM</h1>
						<h1>
							Start Eating at : {changeTo12(prayerData.timings.Maghrib)} PM
						</h1>
						{/* <img src={waving} alt="waving" /> */}
					</>
				) : null}
			</header>
		</div>
	);
}

export default App;
