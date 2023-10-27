import { format, formatDistanceToNow } from "date-fns";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

const comments = [1, 2, 3];
export const Post = (props) => {
  const [comments, setComments] = useState(["Adorei o post, meus parabéns!!!"]);
  const [newCommentText, setNewCommentText] = useState([""]);

  const publishedDateFormatted = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feeedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
};
