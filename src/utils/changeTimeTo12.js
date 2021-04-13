export function changeTimeTo12(time) {
	let hour = time.split(':');
	let times = ((parseInt(hour[0]) + 11) % 12) + 1;
	return `0${times}:${hour[1]}`;
}
