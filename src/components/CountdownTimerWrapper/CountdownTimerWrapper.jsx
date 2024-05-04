import { useState } from "react";
import { CountdownTimer } from "../CountdownTimer/CountdownTimer";
import { TextInput } from "../UI/TextInput/TextInput";
import { Button } from "../UI/Button/Button";
import "./CountdownTimerWrapper.css";


const timeInputReg = /\d{0,2}/;

export const CountdownTimerWrapper = () => {
	const [timeValue, setTimeValue] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
	});
	const [isStartTimer, setIsStartTimer] = useState(false);

	const toValidTimeInput = (value, timeName) => {
		let updatedValue = timeInputReg.exec(String(parseInt(value)))[0];
		if (timeName === "hours") {
			updatedValue = updatedValue > 24 ? 24 : updatedValue;
		} else {
			updatedValue = updatedValue >= 60 ? 59 : updatedValue;
		}

		return String(updatedValue).padStart(2, "0");
	}

	const onInputChange = (e, timeName) => {
		setTimeValue((prevValue) => (
			{
				...prevValue,
				[timeName]: toValidTimeInput(e.target.value, timeName),
			}
		));
	};

	const startTimer = () => {
		setIsStartTimer(true)
	};

	const stopTimer = () => {
		setIsStartTimer(false)
	};

	const timeToSecond = () => {
		const formattedSeconds = timeValue.seconds === '' ? '' : parseInt(timeValue.seconds)
		return timeValue.hours * 3600 + timeValue.minutes * 60 + formattedSeconds
	};

	return (
		<div className="countdown-timer-wrapper">
			<h2 className="block-title">Таймер!</h2>
			<div className="countdown-timer-wrapper__time-inputs">
				{
					Object.keys(timeValue).map((timeName) => (
						<TextInput
							key={timeName}
							className="countdown-timer-wrapper__input"
							disabled={isStartTimer}
							type="text"
							value={timeValue[timeName]}
							onChange={(e) => onInputChange(e, timeName)}
						/>
					))
				}
			</div>
			<CountdownTimer startTime={timeToSecond()} isStart={isStartTimer} setIsStart={setIsStartTimer}/>
			<div className="countdown-timer-wrapper__control-buttons">
				<Button className="countdown-timer-wrapper__start-button" onClick={startTimer}>start</Button>
				<Button className="countdown-timer-wrapper__stop-button" onClick={stopTimer}>stop</Button>
			</div>
		</div>
	)
}