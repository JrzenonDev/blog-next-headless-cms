import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import thumbImg from '../../../public/images/thumb.png'
import { getPrismicClient } from '../../services/prismic'
import styles from './style.module.scss'

type Post = {
  slug: string,
  title: string,
  cover: string,
  updatedAt: string
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {

  console.log(posts)
  return (
    <>
      <Head>
        <title>Blog | Desenvolvimento web com React</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href='/'>
            <Image
              src={thumbImg}
              alt='Post 1'
              width={720}
              height={410}
              quality={100}
            />
            <strong>Criando meu primeiro aplicativo</strong>
            <time>14 de Abril de 2023</time>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, provident aliquam eos impedit fugit facilis odit aut. Exercitationem eveniet maxime sit accusantium nam molestias facere labore molestiae ratione! Impedit, sequi.</p>
          </Link>

          <div className={styles.buttonsNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color='#fff' />
              </button>
              <button>
                <FiChevronLeft size={25} color='#fff' />
              </button>
            </div>
            <div>
              <button>
                <FiChevronsRight size={25} color='#fff' />
              </button>
              <button>
                <FiChevronRight size={25} color='#fff' />
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    orderings: '[documento.last_publication_date desc]',
    fetch: ['post.title', 'post.description', 'post.cover'],
    pageSize: 3
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description: post.data.description.find(content => content.type === 'paragraph')?.text ?? '',
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 60 * 30
  }
}