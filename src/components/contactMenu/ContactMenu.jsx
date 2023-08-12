import styles from './ContactMenu.module.css'
import Logo from '@/components/logo/Logo'

export default function ContactMenu(){
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
                <a href="https://www.linkedin.com/in/augusto-msplett/" target='_blank'>
                    <Logo path='/icons/linkedin.svg'/>
                </a>
            </li>
            <li className={styles.item}>
                <a href="https://github.com/augustosplett" target='_blank'>
                    <Logo path='/icons/github.svg'/>    
                </a>
            </li>
            <li className={styles.item}>
                <a href="mailto:augusto.splett@gmail.com">
                    <Logo path='/icons/envelope-solid.svg'/>
                </a>
            </li>
        </ul>
    )
}