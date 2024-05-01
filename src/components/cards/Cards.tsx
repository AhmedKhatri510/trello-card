// components
import Card from "./card/Card";

// types
import { CardType } from "../../type/type";

// styles
import styles from "./cards.module.scss";

type Props = {
  cards: CardType[];
};

const Cards = ({ cards }: Props) => {
  return (
    <div className={styles.cardsContainer}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default Cards;
