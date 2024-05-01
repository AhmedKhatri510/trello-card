// types
import { CardType } from "../../../type/type";

// styles
import styles from "./card.module.scss";

type Props = {
  card: CardType;
};

const Card = ({ card }: Props) => {
  const { title, description } = card;
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
