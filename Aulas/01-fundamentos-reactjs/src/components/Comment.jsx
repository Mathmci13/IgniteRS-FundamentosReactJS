import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment(props){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/Mathmci13.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego do Assento Foguete</strong>
                            <time title='23 de maio às 13:13' dateTime='2023-05-23 13:13:30'>Cerca de 1 dia atrás</time>
                        </div>
                        
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir<span>13</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}