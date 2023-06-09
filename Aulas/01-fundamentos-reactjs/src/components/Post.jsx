import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export const Post = () => {
  return (
      <article className={styles.post}>
        <header>
        <div className={styles.author}>
          {/* <img className={styles.avatar} src='https://github.com/Mathmci13.png'/> */}
          <Avatar src='https://github.com/Mathmci13.png'/>
          <div className={styles.authorInfo}>
            <strong>Matheus Chagas</strong> 
              <span>Web Developer</span>
          </div>
        </div>

        <time title='22 de maio às 21:14' dateTime='2023-05-22'>Publicado há 1h</time>
        </header>
        <div className={styles.content}>
          <p>Esse é o novo post! </p>
          <p>Treinando react do 0 com o RocketSeat</p>
          <a>É isso aí!</a>
          <a>#VemComNois</a>
          </div>

          <form className={styles.commentForm}>
          <strong>Deixe seu feeedback</strong>
            <textarea
              placeholder='Deixe um comentário'
            />
            <footer>
              <button type='submit'>Publicar</button>
            </footer>
          </form>
          <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
          </div>
      </article>
  )
}
