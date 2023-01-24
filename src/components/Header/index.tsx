import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>

          <ActiveLink href='/' activeClassName={styles.active}>
            <a>
              <Image
                src={logo}
                alt='Logo blog'
                width={248}
                height={72}
              />
            </a>
          </ActiveLink>

          <nav>
            <ActiveLink href='/' activeClassName={styles.active}>
              <a>Home</a>
            </ActiveLink>
            <ActiveLink href='/posts' activeClassName={styles.active}>
              <a>Conteúdo</a>
            </ActiveLink>
            <ActiveLink href='/sobre' activeClassName={styles.active}>
              <a>Quem Somos</a>
            </ActiveLink>
          </nav>

          <a className={styles.readyButton} href='https://' type='button'>Começar</a>

        </div>
      </header>
    </>
  )
}