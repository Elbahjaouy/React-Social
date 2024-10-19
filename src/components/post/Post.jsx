import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTioLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRoght">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postButtom">
          <div className="postBottomLeft">
            <img
              src="https://www.freeiconspng.com/thumbs/facebook-love-png/like-png-11.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src="data:image/png;base64,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"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
