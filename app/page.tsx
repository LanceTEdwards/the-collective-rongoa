import styles from "./page.module.scss";
import Header from "./components/header-components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
}
