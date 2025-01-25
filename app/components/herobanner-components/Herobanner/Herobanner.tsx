import styles from "./Herobanner.module.scss";

export default function Herobanner() {
  return (
    <div className={styles.Herobanner}>
      <div className={styles.Herobanner__image}></div>
      <h2 className={styles.Herobanner__title}>The Rongoā Collective</h2>
      <span className={styles.Herobanner__description}>{`Nau mai haere mai Ngāti Toa Rangatira's very own Rongoa store where you can buy products made by our own.`}</span>
    </div>
  );
}
