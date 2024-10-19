import "./closeFreind.css";

export default function CloseFreind({ user }) {
  return (
    <div>
      <li className="sidebarFreind">
        <img src={user.profilePicture} alt="" className="sidebarFreindImg" />
        <span className="sidebarFreindName">{user.username}</span>
      </li>
    </div>
  );
}
