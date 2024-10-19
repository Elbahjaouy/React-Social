import "./rightbar.css";
import { Posts, Users } from "../../dummyData";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://www.lecoindesentrepreneurs.fr/wp-content/uploads/2013/09/11107540_blog.jpg"
            alt=""
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img
          src="https://www.floraqueen.com/blog/wp-content/uploads/2020/02/shutterstock_1137003704.jpg"
          alt=""
          className="birthdayAd"
        />
        <h4 className="rightbarTitle">Online Freinds</h4>
        {Users.map((u) => (
          <ul className="rightbarFreindList">
            <li className="rightBarFreind">
              <div className="rightbarProfileImgContainer">
                <img
                  src={u.profilePicture}
                  alt=""
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUserName">{u.username}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
