import "./sidebar.css";
import { Users } from "../../dummyData";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import CloseFreind from "../CloseFreind/CloseFreind";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarItemIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Chat className="sidebarItemIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Group className="sidebarItemIcon" />
            <span className="sidebarListItemText">Groupe</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Bookmark className="sidebarItemIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HelpOutline className="sidebarItemIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkOutline className="sidebarItemIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Event className="sidebarItemIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <School className="sidebarItemIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFreindList"></ul>
        {Users.map((u) => (
          <CloseFreind key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
}
