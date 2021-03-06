import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.gridWrapper}>
          <div className={`${styles.content__image} ${styles.leftContent}`}>
            <div className={`${styles.content__text} ${styles.contentWrapper}`}>
              <div>
                <h1>Robô de Automatização de Triagem</h1>
              </div>
              <div>
                <p>
                  Para simplificar o processo de triagem hospitalar no Brasil e
                  no mundo, criamos um robô que automatiza todo esse longo e
                  importante processo.
                </p>
              </div>
              <div>
                <button type="button" className={styles.detailButton}>
                  <Link href="triageAutomation">
                    <a>Detalhes</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.content__image} ${styles.rightContent} `}>
            <div className={`${styles.content__text} ${styles.contentWrapper}`}>
              <div>
                <h1>CardioPatch</h1>
              </div>
              <div>
                <p>
                  Simplificamos o exame de ECG em campos desde custo à
                  mobilidade durante o exame.
                </p>
              </div>
              <div>
                <button type="button" className={styles.detailButton}>
                  <Link href="cardioPatch">
                    <a>Detalhes</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
