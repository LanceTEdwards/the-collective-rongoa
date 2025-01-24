import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import styles from "./HeaderMenu.module.scss";
import Link from "next/link";

export default function headerMenu() {
  return (
    <nav className={styles.HeaderMenu}>
      <ul className={styles.HeaderMenu__menuItems}>
        <li className={styles.HeaderMenu__menuItem}>
          <Link href="#" className={styles.HeaderMenu__menuLink}>
            Home
          </Link>
        </li>
        <li className={styles.HeaderMenu__menuItem}>
          <HeaderDropDown />
        </li>
        <li className={styles.HeaderMenu__menuItem}>
          <Link href="#" className={styles.HeaderMenu__menuLink}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
