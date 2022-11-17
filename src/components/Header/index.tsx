import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>

          <a>
            <Image
              src={logo}
              alt='Logo blog'
              width={248}
              height={72}
            />
          </a>

          <nav>
            <Link href='/'>Home</Link>
            <Link href='/posts'>Conteúdo</Link>
            <Link href='/sobre'>Quem Somos</Link>
          </nav>

          <a className={styles.readyButton} href='https://' type='button'>Começar</a>

        </div>
      </header>
    </>
  )
}