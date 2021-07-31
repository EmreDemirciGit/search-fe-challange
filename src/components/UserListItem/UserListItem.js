const UserListItem = ({
  name_surname,
  company,
  email,
  date,
  country,
  city,
}) => {
  return (
    <li className="user-list-item">
      <div className="user-list-item__container">
        <div className="user-list-item__left">
          <div className="user-list-item__left__location">
            {country} - {city}
          </div>
          <div className="user-list-item__left__name">
            {name_surname} - {date?.slice(-4)}
          </div>
        </div>
        <div className="user-list-item__email">Email: {email}</div>
      </div>
      <hr className="user-list-item__line" />
    </li>
  );
};

export default UserListItem;
