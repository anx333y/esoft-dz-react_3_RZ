import { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css";

export const CountdownTimer = ({ startTime, isStart, setIsStart }) => {
	const [timerCount, setTimerCount] = useState(0);
	const timeSubstracter = useRef();

	useEffect(() => {
		startTime !== '' && setTimerCount(parseInt(startTime));
	}, [startTime])

	useEffect(() => {
		if (isStart) {
			timeSubstracter.current = setInterval(() => {
				setTimerCount((time) => Math.max(time - 1, 0))
			}, 1000);
		} else {
				clearInterval(timeSubstracter.current);
			}
	}, [isStart]);

	useEffect(() => {
		if (timerCount === 0) {
			clearInterval(timeSubstracter.current);
			setIsStart(false);
		}
	}, [timerCount])

	const secondsToTime = (seconds) => {
		const timeHours = String(Math.floor(seconds / 3600)).padStart(2, "0");
		const timeMinutes = String(Math.floor(seconds % 3600 / 60)).padStart(2, "0");
		const timeSeconds = String(Math.floor(seconds % 60)).padStart(2, "0");

		return timeHours + ":" + timeMinutes + ":" + timeSeconds;
	}

	return (
		<span className="countdown-timer">{secondsToTime(timerCount)}</span>
	)
}