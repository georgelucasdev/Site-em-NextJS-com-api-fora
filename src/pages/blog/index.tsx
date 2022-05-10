import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { useState } from "react";

import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';
import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

type blog = {
    slug: string;
    title: string;
    cover: string;
    description: string;
    updatedAt: string;
}

interface blogsProps {
    blogs: blog[];
    page: string;
    totalPage: string;
}

export default function blogs({ blogs: blogsBlog, page, totalPage }: blogsProps) {

    const [currentPage, setCurrentPage] = useState(Number(page));
    const [blogs, setblogs] = useState(blogsBlog || []);

    async function reqblog(pageNumber: number) {
        const prismic = getPrismicClient();

        const response = await prismic.query([
            Prismic.Predicates.at('document.type', 'blog')
        ], {
            orderings: '[document.last_publication_date desc]',
            fetch: ['blog.title', 'blog.description', 'blog.cover'],
            pageSize: 20,
            page: String(pageNumber)
        })
        return response;
    }

    async function navigatePage(pageNumber: number) {
        const response = await reqblog(pageNumber);
        if (response.results.length === 0) {
            return;
        }

        const getblogs = response.results.map(blog => {
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

        setCurrentPage(pageNumber);
        setblogs(getblogs);

    }

    return (
        <>
            <Head>
                <title>Blog | George Lucas Dev</title>
            </Head>
            <main className={styles.container}>
                {blogs.map(blog => (
                    <div className={styles.blogs}>
                        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                            <a key={blog.slug}>
                                <Image
                                    src={blog.cover}
                                    alt={blog.title}
                                    width={720}
                                    height={410}
                                    quality={100}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                                />
                                <strong>{blog.title}</strong>
                                <time>{blog.updatedAt}</time>
                                <p>{blog.description}</p>
                            </a>
                        </Link></div>))}
            </main>
            <footer>
                {Number(totalPage) > 1 && (
                    <div className={styles.botaonavegacao}>
                        {Number(currentPage) > 1 && (
                            <div>
                                <button onClick={() => navigatePage(1)}>
                                    <FiChevronsLeft size={25} color="#FFF" />
                                </button>
                                <button onClick={() => navigatePage(Number(currentPage - 1))}>
                                    <FiChevronLeft size={25} color="#FFF" />
                                </button>
                            </div>
                        )},
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
                )}
            </footer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'blog')
    ], {
        orderings: '[document.last_publication_date desc]',
        fetch: ['blog.title', 'blog.description', 'blog.cover'],
        pageSize: 20
    })


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
        revalidate: 60 * 60
    }
}