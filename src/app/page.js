import styles from './page.module.scss'
import Play from '../components/play';
import Smile from '../components/smile';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Smile />
        <Play />
      </div>
    </main>
  )
}
