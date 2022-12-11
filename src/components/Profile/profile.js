// import ReactDOM from 'react-dom';

export default function Profile(props) {
  console.log(props);
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

// ReactDOM.render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector('#root')
// );
