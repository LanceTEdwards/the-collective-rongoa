import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import styles from "./HeaderMenu.module.scss";
import Link from "next/link";

export default function headerMenu() {
  return (
    <nav className={styles.HeaderMenu}>
      <ul className={styles.HeaderMenu__menuItems}>
        <li>
          <Link href="#" className={styles.HeaderMenu__menuItem}>Home</Link>
        </li>
        <li>
          <button className={styles.HeaderMenu__menuItem}>More</button>
          <HeaderDropDown />
        </li>
        <li>
          <Link href="#" className={styles.HeaderMenu__menuItem}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
