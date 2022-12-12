import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  // console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
          <FriendListItem
            // id={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        </li>
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
