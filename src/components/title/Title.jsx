import styles from './Title.module.css'

export default function Title({white, children}){
    return(
        <h1 className={styles.title} style={{color: white ?  "white" : null}}>
            {children}
        </h1>
    )
}