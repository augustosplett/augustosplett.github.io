import styles from './PolaroidPhoto.module.css';

export default function PolaroidPhoto(props){
    return(
        <div className={styles.item}>
            <div className={styles.polaroid}>
                <img src={props.path}/>
                <div className={styles.caption}>{props.caption}</div>
            </div>
        </div>
    )  
}