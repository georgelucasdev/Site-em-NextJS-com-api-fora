
import { GetServerSideProps } from 'next';
import styles from './portfolio.module.scss';

import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom'
import { redirect } from 'next/dist/server/api-utils';

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

interface PortfolioProps {
    portfolio: {
        slug: string,
        title: string,
        description: string,
        cover: string,
        updatedAt: string,
        link: string
    }
}

export default function Portfolio({ portfolio }) {
    return (
        <>
            <head>
                <title>{portfolio.title}</title>
            </head>
            <main className={styles.container} >
                <article className={styles.portfolio}>
                    <Image
                        src={portfolio.cover}
                        width={720}
                        height={410}
                        quality={100}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                    />
                    <h1>{portfolio.title}</h1>
                    <time>{portfolio.updatedAt}</time>
                    <div className={styles.portfolioContent} dangerouslySetInnerHTML={{ __html: portfolio.description }} />
                    <br />
                    <br />
                    <Link href={portfolio.link}>
                        <a>Acesse este conteudo por este link: --  {portfolio.title}</a>
                    </Link>
                </article>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const { slug } = params;
    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('portfolio', String(slug), {});

    if (!response) {
        return {
            redirect: {
                destination: '/portfolio',
                permanent: false
            }
        }
    }

    const portfolio = {
        slug: slug,
        title: RichText.asText(response.data.title),
        description: RichText.asHtml(response.data.description),
        cover: response.data.cover.url,
        link: response.data.link.url,
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),
    }

    return {
        props: {
            portfolio
        }

    }
}