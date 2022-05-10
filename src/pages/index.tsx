import Head from 'next/head';
import styles from '../styles/home.module.scss';

import Image from 'next/image';


export default function Home() {
  return (
   <>
    <Head>
      <title>George Lucas Aplicativos </title>
    </Head>
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>Levar sua empresa para um novo nivel!</h1>
          <span>Sites profissionais de alta performance com o melhor preço e baixa manutenção!</span>
          <a>
          </a>
        </section>

        <img
            src="/empresas.jpg"
            alt="Conteúdos Sujeito Programador"
        />
      </div>
          <br />

      <hr className={styles.divisor} />

      <div className={styles.sectionContent}>
        <section>
          <h2>exponha sua empresa com a melhor qualidade do mercado!</h2>
          <span>Temos Aplicativos Android e Ios para sua empresa.</span>
        </section>

        <img src="/marketing.jpg" alt="Conteúdos desenvolvimento de apps" />
      </div>

      <hr className={styles.divisor} />

      <div className={styles.sectionContent}>
        <img src="/vendas.jpg" alt="Conteúdos desenvolvimento de aplicacoes web" />

        <section>
          <h2>Trabalhamos com sistemas de vendas!</h2>
          <span>sistemas simplificados para todas as habilidades.</span>
        </section>
      </div>

      <div className={styles.outroComponent}>
        <h2>varias empresas mudaram a forma de ganhar dinheiro no novo mercado de trabalho.</h2>
        <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
        <a>
        </a>
      </div>



    </main>
   </>
  )
}
