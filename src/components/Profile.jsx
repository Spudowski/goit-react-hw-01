import './Profile.css';

function Profile({ user }) {
  return (
    <div className="prf-cnt">
      <div>
        <img src={user.avatar} alt="User Avatar" />
        <p className="username">{user.username}</p>
        <p className='user-desc'>@{user.tag}</p>
        <p className='user-desc'>{user.location}</p>
      </div>

      <ul className='bottom-cont'>
        <li className="bottom-desc">
          <span>Followers</span>
          <br />
          <span className="number-border">{user.stats.followers}</span>
        </li>
        <li className="bottom-desc">
          <span>Views</span>
          <br />
          <span className="number-border">{user.stats.views}</span>
        </li>
        <li className="bottom-desc">
          <span>Likes</span>
          <br />
          <span className="number-border">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
  