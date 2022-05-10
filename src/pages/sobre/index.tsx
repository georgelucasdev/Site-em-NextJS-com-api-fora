import Head from "next/head";
import styles from './styles.module.scss';

import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Sobre() {
    return (
        <>
            <Head>
                <title>George Lucas Aplicativos | Quem Somos?</title>
            </Head>
            <main className={styles.container} >
                <div className={styles.containerHeader} >
                    <section className={styles.ctaText}>
                        <h1></h1>
                        <p></p>
                        <a href="https://www.facebook.com/Lucasc4nd1d0">
                            <FaFacebook size={40} />
                        </a>
                        <a href="https://www.instagram.com/georgelucasdev">
                            <FaInstagram size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/george-lucas-candido-da-silva-65585b179/">
                            <FaLinkedin size={40} />
                        </a>
                        <a href="https://twitter.com/LucasC4ndid0">
                            <FaTwitter size={40} />
                        </a>
                    </section>
                </div>
            </main>
        </>
    )
}