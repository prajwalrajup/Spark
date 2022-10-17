import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/heart.svg" alt="Heart Logo" className={styles.logo} /> from <Link href="https://prajwalrajup.netlify.app/">
          <a className={styles.link} > Prajwal Raju P</a>
        </Link>
      </footer>
    </>
  )
}
