import UserAvatar from "../UserAvatar";
import "./styles.css";

function UserListItem({ user, onClickUser }) {
  return (
    <div
      className="user-info"
      onClick={() => {
        onClickUser(user);
      }}
    >
      <UserAvatar name={user} />
      <span className="user-name">{user}</span>
    </div>
  );
}

function MentionUserList({ users, onClickUser }) {
  return (
    <div className="user-mention-container">
      {users.map((user) => (
        <UserListItem key={user} user={user} onClickUser={onClickUser} />
      ))}
    </div>
  );
}

export default MentionUserList;
