import styles from './styled.module.css'
import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'
import './styled.module.css'
import Script from 'next/script'

export function Header() {

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img className={styles.logo} src='/logo.png' />
                    </div>
                    <div id="mainListDiv" className={styles.main_list}>
                        <ul className={styles.navlinks}>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contato">Contato</a></li>
                            <li><a href="/politica-de-privacidade">Privacidade</a></li>
                        </ul>
                    </div>
                    <span className={styles.navTrigger}>
                        <i><a href="/">Inicio</a></i>
                        <i><a href="/portfolio">Portfolio</a></i>
                        <i><a href="/contato">Contato</a></i>
                        <i><a href="/politica-de-privacidade">Privacidade</a></i>
                    </span>
                </div>
            </nav>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            <script type="text/javascript" src="/Script.js" />
        </>
    )

}