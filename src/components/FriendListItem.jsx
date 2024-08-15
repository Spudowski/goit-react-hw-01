import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? "status-online" : "status-offline";

  return (
    <div className="friend-list-item">
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className="friends-name">{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
