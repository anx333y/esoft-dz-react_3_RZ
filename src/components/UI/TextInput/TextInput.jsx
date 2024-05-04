import { forwardRef } from "react"
import "./TextInput.css"

export const TextInput = forwardRef(({className = '', ...props}) => {
	return (
		<input className={"def-input " + className} {...props} type="text" />
	)
});