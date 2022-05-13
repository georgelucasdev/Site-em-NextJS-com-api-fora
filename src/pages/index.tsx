import Head from 'next/head';
import styles from '../styles/home.module.scss';

import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Head>
        <title>George Lucas Aplicativos </title>
      </Head>
      <div className={styles.containerHeader}>
          <h1>Levar sua empresa para um novo nivel!</h1>
      </div>
        <section className={styles.ctaText}>
            Sites profissionais de alta performance com o melhor preço e baixa manutenção!
            exponha sua empresa com a melhor qualidade do mercado!
            Temos Aplicativos Android e Ios para sua empresa.
            Trabalhamos com sistemas de vendas!
            sistemas simplificados para todas as habilidades
            varias empresas mudaram a forma de ganhar dinheiro no novo mercado de trabalho
            E você vai perder a chance de evoluir de uma vez por todas?
        </section>
    </>
  )
}
