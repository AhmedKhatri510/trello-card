// components
import Button from "../../button/Button";

// types
import { ListType } from "../../../type/type";

// styles
import styles from "./list.module.scss";
import Cards from "../../cards/Cards";

type Props = {
  onAddCardClick: (list: string) => void;
  listItem: ListType;
};

const List = ({ listItem, onAddCardClick }: Props) => {
  const { list, cards } = listItem;

  const handleClick = () => {
    onAddCardClick(list);
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.heading}>
        <h3 className={styles.listName}>{list}</h3>
        <Button text="Add Card" type="dark" handleClick={handleClick} />
      </div>
      <Cards list={list} cards={cards} />
    </div>
  );
};

export default List;
