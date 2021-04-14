const data = require('../data');

export function getTodaysTimes() {
	let times = data.data;

	for (let i = 0; i < times.length; i++) {
		let newDate = new Date();
		let today = newDate.toDateString();
		let newTiming = new Date(times[i].date);
		let timing = newTiming.toDateString();
		if (today === timing) {
			return times[i];
		}
	}
}
