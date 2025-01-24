import styles from "./page.module.scss";
import Header from "./components/header-components/Header/Header";
import Herobanner from "./components/herobanner-components/Herobanner/Herobanner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Herobanner />
    </div>
  );
}
