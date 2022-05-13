import styles from './styled.module.scss'
import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>
                        <img src="/logo.png" alt='a' />
                    </a>
                </ActiveLink>
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Inicio</a>
                    </ActiveLink>
                    <ActiveLink href="/portfolio" activeClassName={styles.active}>
                        <a>Portfólio</a>
                    </ActiveLink>
                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <a>Sobre</a>
                    </ActiveLink>
                    <ActiveLink href="/politica-de-privacidade" activeClassName={styles.active}>
                        <a>Privacidade</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    )
}