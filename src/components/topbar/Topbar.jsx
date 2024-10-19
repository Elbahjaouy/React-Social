import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BehjaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="serchbarIcon" />
          <input
            placeholder="search for freind. post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
      <img
        src="https://previews.123rf.com/images/slena/slena1410/slena141000023/33093407-portrait-de-profil-d-une-belle-jeune-fille-de-repos-dans-un-parc-avec-les-yeux-ferm%C3%A9s.jpg"
        alt=""
        className="topbarImg"
      />
    </div>
  );
}
