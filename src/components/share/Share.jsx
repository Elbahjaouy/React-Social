import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://3.bp.blogspot.com/-1XK2dNDG9Ko/UZdLplHGooI/AAAAAAAAAXY/-x-pC2tLVf8/s1600/Coiffure+relativement+courte+pour+homme+Coiffure+masculine+chatain+souple+court+coiffure+chic+vagues+ordonn%C3%A9es+actu+hair.png"
            alt=""
            className="shareImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="what's in your mind Driss ?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
