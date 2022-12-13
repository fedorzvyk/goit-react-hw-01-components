import PropTypes from 'prop-types';
import CSS from './Profile.module.css'

export default function Profile(props) {
  // console.log(props);
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={CSS.profile}>
      <div className="description">
        <img src={avatar} alt={username} className={CSS.avatar} />
        <p className={CSS.name}>{username}</p>
        <p className={CSS.tag}>@{tag}</p>
        <p className={CSS.location}>{location}</p>
      </div>

      <ul className={CSS.stats__list}>
        <li className={CSS.stats__item}>
          <span className={CSS.label}>Followers</span>
          <span className={CSS.quontity}>{stats.followers}</span>
        </li>
        <li className={CSS.stats__item}>
          <span className={CSS.label}>Views</span>
          <span className={CSS.quontity}>{stats.views}</span>
        </li>
        <li className={CSS.stats__item}>
          <span className={CSS.label}>Likes</span>
          <span className={CSS.quontity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,

    }
  ),
};


