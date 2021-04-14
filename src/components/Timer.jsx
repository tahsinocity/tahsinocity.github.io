import React from 'react';
import { useState, useEffect } from 'react';

const Timer = ({ hour, minute, second }) => {
	const [hours, setHours] = useState(hour);
	const [minutes, setMinutes] = useState(minute);
	const [seconds, setSeconds] = useState(second);
	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					if (hours === 0) {
						clearInterval(myInterval);
					} else {
						setHours(hours - 1);
						setMinutes(59);
						setSeconds(59);
					}
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<div className="timer">
			{hours === 0 && minutes === 0 && seconds === 0 ? null : (
				<h1>
					Time remaining: &nbsp;{hours} hrs {minutes} mins{' '}
					{seconds < 10 ? `0${seconds}` : seconds} secs
				</h1>
			)}
		</div>
	);
};

export default Timer;
