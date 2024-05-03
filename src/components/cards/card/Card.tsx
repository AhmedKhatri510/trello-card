// types
import { useContext } from "react";
import { CardType } from "../../../type/type";

// styles
import styles from "./card.module.scss";
import { ListContext } from "../../../context/listContext";

type Props = {
  list: string;
  card: CardType;
};

const Card = ({ list, card }: Props) => {
  const { title, description } = card;

  const { setEditingCard, setIsEditing, setDefaultList } =
    useContext(ListContext);

  const handleCardClick = () => {
    setEditingCard({ list, ...card });
    setDefaultList(list);
    setIsEditing(true);
  };

  const handleDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.setData("movedListCard", JSON.stringify({ list, ...card }));
  };

  return (
    <div
      className={styles.cardContainer}
      onClick={handleCardClick}
      draggable
      onDragStart={handleDragStart}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
