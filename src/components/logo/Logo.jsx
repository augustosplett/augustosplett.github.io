import styles from './Logo.module.css'
export default function Logo(props){
    return(
        <img className={styles.logo} src={props.path}/>
    )
}