import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { useState } from "react";
export function Comment(props) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <img src="https://github.com/Mathmci13.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego do Assento Foguete</strong>
              <time title="23 de maio às 13:13" dateTime="2023-05-23 13:13:30">
                Cerca de 1 dia atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
