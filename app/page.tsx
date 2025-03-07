"use client"
import styles from "./page.module.scss";
import Header from "./components/header-components/Header/Header";
import Herobanner from "./components/herobanner-components/Herobanner/Herobanner";
import Card from "./components/card-components/cards";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <Herobanner />
      <Card data={data.cards} />
    </div>
  );
}
