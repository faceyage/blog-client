import Comments from "./Comments";
import styles from "../styles/Post.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const { DateTime } = require("luxon");

const Post = () => {
  const { postid } = useParams();
  const [post, setPost] = useState();
  const [noPost, setNoPost] = useState(false);
  const [comments, setComments] = useState([]);

  //function for fetching the post from api
  const fetchPost = async () => {
    try {
      const res = await fetch("https://blog-api-ffa9.onrender.com/posts/" + postid, {
        mode: "cors",
      });
      const data = await res.json();
      setPost(data.post);
      if (data?.error) {
        setNoPost(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  //function for fetching and updating the comments from api
  const updateComments = async () => {
    try {
      const res = await fetch(`https://blog-api-ffa9.onrender.com/posts/${postid}/comments`, {
        mode: "cors",
      });
      const data = await res.json();
      setComments(data.comments);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPost();
    updateComments();
  }, []);

  if (post) {
    return (
      <>
        <div className={styles["post-page"]}>
          <div className={styles.post}>
            <div className={styles.top}>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.info}>
                <p className={styles.name}>By John Doe</p>
                <p className={styles.date}>
                  {DateTime.fromJSDate(new Date(post.date_posted)).toLocaleString(
                    DateTime.DATE_MED
                  )}
                </p>
              </div>
            </div>
            <img
              src={
                post?.imgUrl ||
                "https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1650554420"
              }
              alt=""
              className={styles["post-image"]}
            />
            <p className={styles.content}>{post.content}</p>
          </div>
          <Comments comments={comments} postid={postid} updateComments={updateComments} />
        </div>
      </>
    );
  } else if (noPost) {
    return <div>Can't find post</div>;
  } else {
    return <div className="loader"></div>;
  }
};

export default Post;
