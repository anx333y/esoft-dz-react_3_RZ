import { useEffect, useState } from "react";
import { UserCard } from "../UserCard/UserCard";
import "./UserList.css"

const fetchURL = 'https://jsonplaceholder.typicode.com/users';

export const UserList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(fetchURL)
		.then((fetchInfo) => fetchInfo.json())
		.then((fetchData) => setData(fetchData))
		.catch((err) => console.log(err))
	}, []);


	return (
		<div className="user-list">
			<h2 className="block-title">Список юзеров!</h2>
			<div className="user-list__cards">
				{
					data.map((card) => 
						<UserCard key={card.id} {...card} />
					)
				}
			</div>
		</div>
	)
}