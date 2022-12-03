import PostPreview from "./PostPreview";
import styles from "../styles/Posts.module.scss";

import { useState, useEffect } from "react";
const { DateTime } = require("luxon");

const Posts = () => {
  const [posts, setPosts] = useState();

  //fetch posts and set to the posts state
  useEffect(() => {
    fetch("https://blog-api-ffa9.onrender.com/posts", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        if (data.error) {
        }
      })
      .catch((err) => console.error(err));
  }, []);
  if (!posts) {
    return <div className="loader"></div>;
  } else {
    return (
      <div className={styles.posts}>
        {posts.map((post) => {
          console.log(post.date_posted);
          return (
            <PostPreview
              title={post.title}
              content={post.content}
              id={post._id}
              imgUrl={post?.imgUrl}
              date={DateTime.fromJSDate(new Date(post.date_posted)).toLocaleString(
                DateTime.DATE_MED
              )}
              key={post._id}
            />
          );
        })}
      </div>
    );
  }
};

export default Posts;
