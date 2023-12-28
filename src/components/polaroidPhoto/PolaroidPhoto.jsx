import styles from './PolaroidPhoto.module.css';

export default function PolaroidPhoto(){
    return(
        <div className={styles.wrapper}>

            <div className={styles.item}>
            <div className={styles.polaroid}><img src="https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg"/>
                <div className={styles.caption}>I Miss London</div>
            </div>
            </div>
        
            <div className={styles.item}>
            <div className={styles.polaroid}><img src="https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg"/>
                <div className={styles.caption}>Love ballons</div>
            </div>
            </div>
        
            <div className={styles.item}>
            <div className={styles.polaroid}><img src="https://image.ibb.co/hQaarc/antique_blur_camera_828378.jpg"/>
                <div className={styles.caption}>Vintage life </div>
            </div>
            </div>

    
        </div>
    )  
}