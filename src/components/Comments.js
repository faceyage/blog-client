import styles from "../styles/Comments.module.scss";
const { DateTime } = require("luxon");

const Comments = ({ comments, postid, updateComments }) => {
  //calls to api to add comment
  const add_comment = async (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const content = e.target.content.value;

    console.log("Name: ", user);
    console.log("Content: ", content);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, content }),
    };
    const res = await fetch(
      `https://blog-api-ffa9.onrender.com/posts/${postid}/comments`,
      requestOptions
    );
    const data = await res.json();
    updateComments();
  };

  return (
    <div className={styles["comments-container"]}>
      <h2 className={styles["comments-title"]}>Comments</h2>
      <form action="" className={styles["comment-form"]} onSubmit={add_comment}>
        <div className={styles["form-group"]}>
          <label htmlFor="user">Name</label>
          <input type="text" name="user" id="user" />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="content">Comment</label>
          <input type="text" name="content" id="content" />
        </div>
        <input type="submit" value="Send" className="btn" />
      </form>

      <div className={styles.comments}>
        {comments.map((comment) => {
          return (
            <div className={styles.comment} key={comment?._id}>
              <div className={styles.top}>
                <span className={styles.name}>{comment?.user}</span>
                <span className={styles.date}>
                  {DateTime.fromJSDate(new Date(comment?.date_post)).toRelative({})}
                </span>
              </div>
              <div className={styles.content}>{comment?.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
