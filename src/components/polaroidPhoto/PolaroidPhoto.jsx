import styles from './PolaroidPhoto.module.css';

export default function PolaroidPhoto(props){
    return(
        <div className={styles.item} onClick={() => window.open(props.link,'_blank')}>
            <div className={styles.polaroid}>
                <img src={props.path}/>
                <div className={styles.caption}>{props.caption}</div>
            </div>
        </div>
    )  
}