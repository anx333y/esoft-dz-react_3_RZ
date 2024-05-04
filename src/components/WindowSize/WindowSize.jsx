import { useEffect, useState } from "react";
import "./WindowSize.css";

export const WindowSize = () => {
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	})

	const resizeHandler = () => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", resizeHandler);
		resizeHandler();

		return () => (
			window.removeEventListener("resize", resizeHandler)
		)
	}, [])

	return (
		<div className="window-size">
			<h2 className="block-title">Размер окна!</h2>
			<ul className="window-size__sizes">
				<li className="window-size__size">
					<span>Ширина:</span>
					<span>{size.width}</span>
				</li>
				<li className="window-size__size">
					<span>Ширина:</span>
					<span>{size.height}</span>
				</li>
			</ul>
		</div>
	)
};