// components
import Card from "./card/Card";

// types
import { CardType } from "../../type/type";

// styles
import styles from "./cards.module.scss";

type Props = {
  list: string;
  cards: CardType[];
};

const Cards = ({ list, cards }: Props) => {
  return (
    <div className={styles.cardsContainer}>
      {cards.map((card) => (
        <Card list={list} card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
