import React from "react";
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className="userCard" key={user.id}>
      <h3 className="userCard__title">
        {user.first_name} {user.last_name}
      </h3>
      <hr />
      <ul className="userCard__list">
        <li className="userCard__date">
          <span>Email: </span><br /> {user.email}
        </li>
        <li className="userCard__date">
          <span>Birthday: </span><br /> <i class="bx bx-gift"></i> {user.birthday}
        </li>
      </ul>
      <hr />
      <footer className="userCard__footer">
        <button className="userCard__btn1" onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="userCard__btn2" onClick={handleClickEdit}>
          <i className="bx bx-pencil"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
