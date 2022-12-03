import { useEffect } from "react";
import styles from "../styles/PostPreview.module.scss";

const PostPreview = ({ title, content, date, imgUrl, id }) => {
  return (
    <a href={`/posts/${id}`}>
      <div className={styles.post}>
        <img
          src={
            imgUrl ||
            "https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1650554420"
          }
          alt="post"
          className={styles["post-image"]}
        />
        <div className={styles["post-info"]}>
          <h2 className={styles["post-title"]}>{title}</h2>
          <p className={styles["post-content"]}>
            {content.length > 200 ? content.slice(0, 200) + ".." : content}
          </p>
          <p className={styles["post-date"]}>{date}</p>
        </div>
      </div>
    </a>
  );
};

export default PostPreview;
