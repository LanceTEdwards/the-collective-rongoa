import styles from "./header.module.scss";
import Image from "next/image";
import HeaderMenu from "/Users/edwardsl/Desktop/the-collective-rongoa/app/components/HeaderMenu/HeaderMenu";
import font from "../../typography.module.scss";

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.header__logoTitleContainer}>
            <Image src="/CollectiveRongoaLogo.png" width={500} height={500} alt="Collective Rongoa Logo" className={styles.header__logo} />
            <div className={`${font.header__title} ${styles.header__title}`}>
                Rongoā Art Collective
            </div>
        </div>
        <HeaderMenu />
      </header>
    );
  }