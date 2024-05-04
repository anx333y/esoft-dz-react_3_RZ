import "./UserCard.css";

export const UserCard = ({id, name, username, email, address, phone, website, company}) => {

	return (
		<div className="user-card">
			<h3 className="user-card__title">{username}</h3>
			<ul className="user-card__info">
				<li className="user-card__info__item">
					<span className="user-card__info__item__label">Полное имя:</span>
					<span className="user-card__info__item__info">{name}</span>
				</li>
				<li className="user-card__info__item">
					<span className="user-card__info__item__label">Телефон:</span>
					<span className="user-card__info__item__info">{phone}</span>
				</li>
				<li className="user-card__info__item">
					<span className="user-card__info__item__label">Эл.почта:</span>
					<span className="user-card__info__item__info">{email}</span>
				</li>
				<li className="user-card__info__item">
					<span className="user-card__info__item__label">Сайт:</span>
					<span className="user-card__info__item__info">{website}</span>
				</li>
				<li className="user-card__info__item">
					<span className="user-card__info__item__label">Адрес:</span>
					<span className="user-card__info__item__info">{address.street + ', ' + address.suite + ', ' + address.city}</span>
				</li>
				<li className="user-card__info__item">
					<span className="user-card__info__item__label">Компания:</span>
					<span className="user-card__info__item__info">{company.name}</span>
				</li>
			</ul>
		</div>
	)
};