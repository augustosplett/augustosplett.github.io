import styles from "@/components/paragraph/Paragraph.module.css"

export default function Paragraph({ children }){
    return(
        <p className={styles.paragraph}>
            { children }
        </p>
    )
}