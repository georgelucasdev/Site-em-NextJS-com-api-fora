import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Image from 'next/image';



export default function Home() {
  return (
    <>
      <Head>
        <title>George Lucas Aplicativos </title>
      </Head>
      <hr className={styles.hrtop}/>
      <div className={styles.containerHeader}>
        <h1></h1>
        <img
        src="/foto1.png"
         />
        <p>
          Em constante evolução em desenvolvimento web para front end;
          focado em criar novas experiências para o usuário com as tecnologias e frameworks mais utilizadas do mercado
          : ReactJS, NextJS, Typescript, NodeJS em combinação com banco de dados em servidor. De caráter honesto,
          busca o estímulo, organização, compartilhamento de conhecimento e o contínuo desenvolvimento pessoal e
          profissional do grupo de trabalho.
        </p>
      </div>
      <hr className={styles.hr}/>
      <section className={styles.ctaText}>
      </section>
    </>
  )
}
