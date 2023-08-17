import styles from './Navbar.module.css'
import Title from '../title/Title'

export default function Navbar(props){

    return(
        <nav className={styles.navbar}>
            <Title white> 	&#123; Augusto.Splett &#125; </Title>
        </nav>
    )
}