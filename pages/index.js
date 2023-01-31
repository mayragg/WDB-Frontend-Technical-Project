import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Little Unicorn</title>
      </Head>

      <main className={styles.main}>
        <div className="navBar">
          {' '}
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a Link href="/_about">About Us</a>
            </li>
          </ul>
        </div>
        <h1 className={styles.title} id="care">
          Care & Love?{' '}
        </h1>

        <p className="adopt"> Adopt </p>

      </main>

      {/* <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer> */}
    </div>
  );
}
