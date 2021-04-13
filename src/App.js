import './App.css';
import React, { useState, useEffect } from 'react';
import { getTodaysTimes } from './utils/getTodaysTimes';

function App() {
	const [prayerData, setPrayerData] = useState(null);

	useEffect(() => {
		let todaysPrayerTimes = getTodaysTimes();
		setPrayerData(todaysPrayerTimes);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{prayerData ? (
					<>
						<iframe
							title="ramadan"
							src="https://giphy.com/embed/nKA4aQgYPQKHbRA10y"
							width="480"
							height="480"
							frameBorder="0"
							class="giphy-embed"
							allowFullScreen
						></iframe>
						<h1>Today is : {prayerData.date}</h1>
						<h1>Suhr At : {prayerData.suhr}</h1>
						<h1>Iftaar At : {prayerData.iftar}</h1>
						<p>*Only applicable for NYC resident</p>
					</>
				) : (
					<h1>Loading...</h1>
				)}
			</header>
		</div>
	);
}

export default App;
