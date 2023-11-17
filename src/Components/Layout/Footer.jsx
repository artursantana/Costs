import styles from './Footer.module.css'

import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/Fa'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <FaFacebook />
            </li>
            <li className={styles.item}>
                <FaInstagram />
            </li>
            <li className={styles.item}>
                <FaLinkedin />
            </li>
        </ul>
        <p className={styles.copy}> <span className={styles.copy_span}>Cost</span> &copy; 2023</p>
    </footer>
  )
}
