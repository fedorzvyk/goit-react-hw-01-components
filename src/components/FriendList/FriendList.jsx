import PropTypes from 'prop-types';
import CSS from './FriendList.module.css'

export default function FriendList({ friends }) {
  // console.log(friends);
  return (
    <ul className={CSS.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={CSS.friend_item}>
          <FriendListItem
            
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
    <div className={CSS.friend_wrapper}>
      <span className={`${CSS.status} ${CSS[isOnline]}`}></span>
      <img className={CSS.avatar} src={avatar} alt={name} width="48" />
      <p className={CSS.name}>{name}</p>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
