"use client";
import { useRef, useState } from "react";
import styles from "./HeaderDropDown.module.scss";
import Link from "next/link";

export default function HeaderDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.HeaderDropDown}>
      <button
        onClick={toggleMenu}
        className={styles.HeaderDropDown__item}
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        More
      </button>
      <div
        id="dropdown-menu"
        ref={menuRef}
        className={`${styles.HeaderDropDown__linkContainer} ${
          isOpen ? styles.HeaderDropDown__linkContainerOpen : ""
        }`}
      >
        <Link href="#" className={styles.HeaderDropDown__link}>
          Product 1
        </Link>
        <Link href="#" className={styles.HeaderDropDown__link}>
          Product 2
        </Link>
        <Link href="#" className={styles.HeaderDropDown__link}>
          Product 3
        </Link>
      </div>
    </div>
  );
}
