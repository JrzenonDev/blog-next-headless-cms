import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado porJrZenonDev</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error officiis harum eaque quod omnis minus, eum odio temporibus quisquam quis cum nihil ducimus hic labore fuga incidunt et cupiditate quo.
            </span>
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>
          <img src='/images/banner-conteudos.png' alt='Conteúdos de tecnologia' />
        </div>
      </main>
    </>
  )
}
