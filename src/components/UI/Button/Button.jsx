import "./Button.css";

export const Button = ({children, className="", ...props}) => {
	return (
		<button 
			className={"def-button " + className}
			{...props}
		>
			{children}
		</button>
	)
};