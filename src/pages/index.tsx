import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { RichText } from 'prismic-dom';
import techsImage from '../../public/images/techs.svg';
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/home.module.scss';

type Content = {
  title: string;
  sub_title: string;
  button_action: string;
  mobile: string;
  mobile_content: string;
  mobile_banner: string;
  title_web: string;
  web_content: string;
  web_banner: string;
}

interface ContentProps {
  content: Content;
}

export default function Home({ content }: ContentProps) {

  return (
    <>
      <Head>
        <title>JrZenonDev</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível</h1>
            <span>
            Uma plataforma com cursos que vão do zero até o profissional na pratica, direto ao ponto aplicando o que usamos no mercado de trabalho. 👊
            </span>
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>
          <img src='/images/banner-conteudos.png' alt='Conteúdos de tecnologia' />
        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero até aplicativos.</span>
          </section>
          <img src='/images/financasApp.png' alt='Conteúdos desenvolvimento de apps' />
        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionContent}>
          <img src='/images/webDev.png' alt='Conteúdos desenvolvimento de aplicacoes web' />
          <section>
          <h2>Aprenda criar sistemas web</h2>
          <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt="Tecnologias" />
          <h2>Mais de <span className={styles.alunos}>15 mil </span>já levaram sua carreira ao próximo nível.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a>
            <button>ACESSAR TURMA!</button>
          </a>
        </div>

      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])

  const {
    title, sub_title, button_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data

  const content = {
    title: RichText.asText(title),
    sub_title: RichText.asText(sub_title),
    button_action: button_action.url,
    mobile: RichText.asText(mobile),
    mobile_content: RichText.asText(mobile_content),
    mobile_banner: mobile_banner.url,
    title_web: RichText.asText(title_web),
    web_content: RichText.asText(web_content),
    web_banner: web_banner.url
  }

  return {
    props: {
      content
    },
    revalidate: 60 * 2
  }
}