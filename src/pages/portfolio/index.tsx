import { GetStaticProps } from 'next';
import { useState } from 'react';

import Head from 'next/head';

import styles from './styles.module.scss';
import Link from 'next/link';

import Image from 'next/image';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';


import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

type Portfolio = {
    slug: string;
    title: string;
    cover: string;
    description: string;
    updatedAt: string
}

interface PortfoliosProps {
    portfolios: Portfolio[];
    page: string;
    totalPage: string;
}

export default function Portfolios({ portfolios: portfoliosBlog, page, totalPage }: PortfoliosProps) {

    const [currentPage, setCurrentPage] = useState(Number(page));
    const [portfolios, setPortfolios] = useState(portfoliosBlog || []);

    //Buscar novos portfolios
    async function reqPortfolio(pageNumber: number) {
        const prismic = getPrismicClient();

        const response = await prismic.query([
            Prismic.Predicates.at('document.type', 'portfolio')
        ], {
            orderings: '[document.last_publication_date desc]', //Ordenar pelo mais recente
            fetch: ['portfolio.title', 'portfolio.description', 'portfolio.cover'],
            pageSize: 3,
            page: String(pageNumber)
        })

        return response;
    }

    async function navigatePage(pageNumber: number) {
        const response = await reqPortfolio(pageNumber);

        if (response.results.length === 0) {
            return;
        }

        const getPortfolios = response.results.map(portfolio => {
            return {
                slug: portfolio.uid,
                title: RichText.asText(portfolio.data.title),
                description: portfolio.data.description.find(content => content.type === 'paragraph')?.text ?? '',
                cover: portfolio.data.cover.url,
                updatedAt: new Date(portfolio.last_publication_date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })

        setCurrentPage(pageNumber)
        setPortfolios(getPortfolios);

    }

    return (
        <>
            <Head>
                <title>PortFólio | George Lucas Aplicativos</title>
            </Head>
            <main className={styles.container}>
            </main>
            <div className={styles.portfolios}>
                {portfolios.map(portfolio => (
                    <Link key={portfolio.slug} href={`/portfolio/${portfolio.slug}`}>
                        <a key={portfolio.slug}>
                            <Image
                                src={portfolio.cover}
                                alt={portfolio.title}
                                width={720}
                                height={410}
                                quality={100}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII="
                            />
                            <strong>{portfolio.title}</strong>
                            <time>{portfolio.updatedAt}</time>
                            <p>{portfolio.description}</p>
                        </a>
                    </Link>
                ))}
            </div>
            <footer>
                <div className={styles.buttonNavigate}>
                    {Number(currentPage) >= 2 && (
                        <div>
                            <button onClick={() => navigatePage(1)}>
                                <FiChevronsLeft size={25} color="#FFF" />
                            </button>
                            <button onClick={() => navigatePage(Number(currentPage - 1))}>
                                <FiChevronLeft size={25} color="#FFF" />
                            </button>
                        </div>
                    )}

                    {Number(currentPage) < Number(totalPage) && (
                        <div>
                            <button onClick={() => navigatePage(Number(currentPage + 1))}>
                                <FiChevronRight size={25} color="#FFF" />
                            </button>
                            <button onClick={() => navigatePage(Number(totalPage))}>
                                <FiChevronsRight size={25} color="#FFF" />
                            </button>
                        </div>
                    )}
                </div>
            </footer>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'portfolio')
    ], {
        orderings: '[document.last_publication_date desc]', //Ordenar pelo mais recente
        fetch: ['portfolio.title', 'portfolio.description', 'portfolio.cover'],
        pageSize: 3
    })

    // console.log(JSON.stringify(response, null, 2))

    const portfolios = response.results.map(portfolio => {
        return {
            slug: portfolio.uid,
            title: RichText.asText(portfolio.data.title),
            description: portfolio.data.description.find(content => content.type === 'paragraph')?.text ?? '',
            cover: portfolio.data.cover.url,
            updatedAt: new Date(portfolio.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            portfolios,
            page: response.page,
            totalPage: response.total_pages
        },
        revalidate: 60 * 60 // Atualiza a cada 30 minutos.
    }
}