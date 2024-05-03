// components
import Button from "../../button/Button";

// types
import { ListType } from "../../../type/type";

// styles
import styles from "./list.module.scss";
import Cards from "../../cards/Cards";
import { useContext } from "react";
import { ListContext } from "../../../context/listContext";

type Props = {
  onAddCardClick: (list: string) => void;
  listItem: ListType;
};

const List = ({ listItem, onAddCardClick }: Props) => {
  const { list, cards } = listItem;
  const { lists, setLists } = useContext(ListContext);

  const handleClick = () => {
    onAddCardClick(list);
  };

  const handleDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    movedList: string
  ) => {
    const movedListCard = e.dataTransfer.getData("movedListCard");
    const listCard = JSON.parse(movedListCard);

    const { id, title, description, list: draggedList } = listCard;

    // remove the card from old list
    const tempLists = [...lists];
    const draggedListIdx = lists.findIndex((list) => list.list === draggedList);
    const { cards } = tempLists[draggedListIdx];
    const cardIdx = cards.findIndex((card) => card.id === id);
    cards.splice(cardIdx, 1);
    // add the card in new list
    const movedListIdx = tempLists.findIndex((list) => list.list === movedList);
    const { cards: destinationCards } = tempLists[movedListIdx];
    const movedCard = { id, title, description };
    const newCards = [...destinationCards, movedCard];
    tempLists[movedListIdx].cards = newCards;
    setLists(tempLists);
  };

  return (
    <div
      className={styles.listContainer}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, list)}
    >
      <div className={styles.heading}>
        <h3 className={styles.listName}>{list}</h3>
        <Button text="Add Card" type="dark" handleClick={handleClick} />
      </div>
      <Cards list={list} cards={cards} />
    </div>
  );
};

export default List;
