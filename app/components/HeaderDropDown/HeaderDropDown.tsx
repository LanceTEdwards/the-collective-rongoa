import styles from "./HeaderDropDown.module.scss";
import Link from "next/link";

export default function HeaderDropDown() {
  return (
    <div className={styles.HeaderDropDown}>
      <div className={styles.HeaderDropDown__itemsHidden}>
        <Link href="#" className={styles.HeaderDropDown__link}>
          Test 1
        </Link>
        <Link href="#" className={styles.HeaderDropDown__link}>
          Test 2
        </Link>
        <Link href="#" className={styles.HeaderDropDown__link}>
          Test 3
        </Link>
      </div>
    </div>
  );
}
