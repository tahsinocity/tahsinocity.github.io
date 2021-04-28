import './App.css';
import React, { useState, useEffect } from 'react';
import { getTodaysTimes } from './utils/getTodaysTimes';
import { getAllTimings } from './utils/getAllTimings';
import Timer from './components/Timer';

function App() {
	const [prayerData, setPrayerData] = useState(null);
	const [hours, setHours] = useState(null);
	const [minutes, setMinutes] = useState(null);
	const [seconds, setSeconds] = useState(null);

	useEffect(() => {
		let todaysPrayerTimes = getTodaysTimes();
		let timings = getAllTimings(todaysPrayerTimes);
		setPrayerData(todaysPrayerTimes);
		setHours(timings.hour);
		setMinutes(timings.minute);
		setSeconds(timings.second);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{prayerData ? (
					<div className="prayerTime">
						<iframe
							title="ramadan"
							src="https://giphy.com/embed/nKA4aQgYPQKHbRA10y"
							width="400"
							height="400"
							frameBorder="0"
							className="giphy-embed"
							allowFullScreen
						></iframe>

						<h1>Today is : {prayerData.date}</h1>
						<h1>Suhr Ends : {prayerData.suhr}</h1>
						<h1>Iftaar At : {prayerData.iftar}</h1>
						<Timer hour={hours} minute={minutes} second={seconds} />
						<h6>For Rupom ❤️</h6>
						<p>*Only applicable for NYC resident</p>
					</div>
				) : (
					<h1>Loading...</h1>
				)}
			</header>
		</div>
	);
}

export default App;
