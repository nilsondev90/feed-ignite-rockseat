/* 
Ordem de criação:
    1 html
    2 esticização
    3 funcionamento
*/
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author, publishedAt, content }) {

    /* 
    ao inves de "Post(props)" para usar "props.author.avatarUrl"
    vamos fazer a desestruturação de Post({ author }) para usar "author.avatarUrl"
    
    */

    //Formatação em Java Script
    //Intl.DateTimeFormat - Formatos de data JavaScript
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
    /* const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit', // Usar o dia com 2 dígitos
        month: 'long', // Usar para aparecer o nome do mês completo
        hour: '2-digit', // Usar a hora com 2 dígitos
        minute: '2-digit', // Usar o minuto com 2 dígitos
    }).format(publishedAt) */

    //Formatação em da lib 'date-fns'
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dataTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type == 'paragraph') {
                            return <p>{line.content}</p>
                        } else if (line.type == 'link') {
                            return  <p>
                                        <a href='#'>{line.content}</a>
                                    </p>
                        }
                    })
                }
            </div>
            <form className={styles.commentform}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer className={styles.commentformFooter}>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}