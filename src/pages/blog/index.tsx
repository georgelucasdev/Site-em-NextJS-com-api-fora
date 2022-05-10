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

type Blog = {
    slug: string;
    title: string;
    cover: string;
    description: string;
    updatedAt: string
}

interface BlogsProps {
    blogs: Blog[];
    page: string;
    totalPage: string;
}

export default function Blogs({ blogs: blogsBlog, page, totalPage }: BlogsProps) {

    const [currentPage, setCurrentPage] = useState(Number(page));
    const [blogs, setBlogs] = useState(blogsBlog || []);

    //Buscar novos blogs
    async function reqBlog(pageNumber: number) {
        const prismic = getPrismicClient();

        const response = await prismic.query([
            Prismic.Predicates.at('document.type', 'blog')
        ], {
            orderings: '[document.last_publication_date desc]', //Ordenar pelo mais recente
            fetch: ['blog.title', 'blog.description', 'blog.cover'],
            pageSize: 3,
            page: String(pageNumber)
        })

        return response;
    }

    async function navigatePage(pageNumber: number) {
        const response = await reqBlog(pageNumber);

        if (response.results.length === 0) {
            return;
        }

        const getBlogs = response.results.map(blog => {
            return {
                slug: blog.uid,
                title: RichText.asText(blog.data.title),
                description: blog.data.description.find(content => content.type === 'paragraph')?.text ?? '',
                cover: blog.data.cover.url,
                updatedAt: new Date(blog.last_publication_date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })

        setCurrentPage(pageNumber)
        setBlogs(getBlogs);

    }

    return (
        <>
            <Head>
                <title>Blog | George Lucas Aplicativos</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.blogs}>
                    {blogs.map(blog => (
                        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                            <a key={blog.slug}>
                                <Image
                                    src={blog.cover}
                                    alt={blog.title}
                                    width={720}
                                    height={410}
                                    quality={100}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII="
                                />
                                <strong>{blog.title}</strong>
                                <time>{blog.updatedAt}</time>
                                <p>{blog.description}</p>
                            </a>
                        </Link>
                    ))}
                </div>
        </main>
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
        Prismic.Predicates.at('document.type', 'blog')
    ], {
        orderings: '[document.last_publication_date desc]', //Ordenar pelo mais recente
        fetch: ['blog.title', 'blog.description', 'blog.cover'],
        pageSize: 3
    })

    // console.log(JSON.stringify(response, null, 2))

    const blogs = response.results.map(blog => {
        return {
            slug: blog.uid,
            title: RichText.asText(blog.data.title),
            description: blog.data.description.find(content => content.type === 'paragraph')?.text ?? '',
            cover: blog.data.cover.url,
            updatedAt: new Date(blog.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            blogs,
            page: response.page,
            totalPage: response.total_pages
        },
        revalidate: 60 * 60 // Atualiza a cada 30 minutos.
    }
}