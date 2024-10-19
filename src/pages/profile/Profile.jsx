import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/10/26/thumbs_b_c_8d7770cc61eb3b6ae645a2eceddc7289.jpg?v=134047"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://img.freepik.com/photos-premium/photo-recadree-jeune-homme-dans-son-fauteuil-roulant-cree-ia-generative_762026-24180.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Driss Elbahjaouy</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
