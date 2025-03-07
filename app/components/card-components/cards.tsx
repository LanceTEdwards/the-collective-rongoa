import styles from "./cards.module.scss";
import Image from "next/image";

interface CardProps {
  data: {
    image: string;
    title: string;
    description: string;
    price: string;
  }[];
}

const Card = ({ data }: CardProps) => {
  return (
    <div className={styles.cards}>
      {data.map((card, index) => (
        <div key={`${card.title}-${index}`} className={styles.cards__container}>
          <Image
            src={card.image}
            width={400}
            height={300}
            alt={card.title}
            className={styles.cards__image}
          />
          <div className={styles.cards__cardInfo}>
            <div className={styles.cards__title}>{card.title}</div>
            <div className={styles.cards__description}>{card.description}</div>
            <div className={styles.cards__price}>{card.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
