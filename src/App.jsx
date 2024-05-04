import { CountdownTimerWrapper } from "./components/CountdownTimerWrapper/CountdownTimerWrapper"
import "./App.css";
import { UserList } from "./components/UserList/UserList";
import { WindowSize } from "./components/WindowSize/WindowSize";
function App () {
	return (
		<div className="app">
			<CountdownTimerWrapper />
			<UserList />
			<WindowSize />
		</div>
	)
}

export default App