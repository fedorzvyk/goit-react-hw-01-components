import PropTypes from 'prop-types';
import { FaUser, FaRegEye, FaRegThumbsUp } from 'react-icons/fa';
import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats__list}>
        <li className={css.stats__item}>
          <span className={css.label}>Followers</span>
          <span className={css.quontity}>
            <FaUser /> {followers}
          </span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Views</span>
          <span className={css.quontity}>
            <FaRegEye /> {views}
          </span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Likes</span>
          <span className={css.quontity}>
            <FaRegThumbsUp /> {likes}
          </span>
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
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
