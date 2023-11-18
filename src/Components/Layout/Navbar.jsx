import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import Logo from '../img/Logo.svg'
import { FiMenu } from "react-icons/fi";

import { Container } from './Container'



export const Navbar = () => {

  return (

        <nav className={styles.navbar}>
            <Container>
                <div className={styles.imgnavbarcontainer}>
                <Link to='/'><img className={styles.imgnavbar} src={Logo} alt="Costs" /></Link>

                <FiMenu className={styles.button_menu} onClick={()=>{}}/>
                </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Projects'>Projects</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Company'>Company</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
            </Container>
        </nav>
  )
}
