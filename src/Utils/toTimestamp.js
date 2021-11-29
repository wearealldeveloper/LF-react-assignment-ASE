// Package

import {format, render, cancel, register} from "timeago.js";

export const toTimestamp = (created_at) => {
	// console.log("toTimestamp ", created_at);

	let dateAndTime = created_at?.split("T");
	let date = dateAndTime[0].split("-");
	let time = dateAndTime[1].split(":");

	// console.log(date, time);
	let year = Number(date[0]);
	let month = Number(date[1]);
	let day = Number(date[2]);

	let hour = Number(time[0]);
	let minute = Number(time[1]);
	let second = Number(time[2].substring(0, 2));

	// console.log(hour, minute, second);

	let datum = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
	let ts = datum.getTime() / 1000;
	// console.log("To time stamp", ts);

	let relativeTime = format(new Date(ts * 1000));
	// console.log("relative time", relativeTime);
	return relativeTime;
};
