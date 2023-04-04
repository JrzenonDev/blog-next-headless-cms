import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import thumbImg from '../../../public/images/thumb.png'
import styles from './style.module.scss'

export default function Posts() {
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
        </div>
      </main>
    </>
  )
}