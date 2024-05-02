import { useState } from "react";

// components
import List from "./list/List";
import CardModal from "../card-modal/CardModal";

// utils
import { v4 as uuidv4 } from "uuid";

// types
import { InitialValues, ListType } from "../../type/type";

// styles
import styles from "./lists.module.scss";

const Lists = () => {
  const [lists, setLists] = useState<ListType[]>([
    {
      list: "todo",
      cards: [],
    },
    {
      list: "doing",
      cards: [],
    },
    {
      list: "done",
      cards: [],
    },
  ]);
  const listOptions = lists.map((list) => list.list);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [defaultList, setDefaultList] = useState(lists[0].list);

  const handleCancel = () => {
    setIsAddingCard(false);
  };

  const handleSubmit = (values: InitialValues) => {
    const { list: inputList, title, description } = values;
    const listIdx = lists.findIndex((list) => list.list === inputList);
    const { cards } = lists[listIdx];
    const cardToAdd = { id: uuidv4(), title, description };
    const newCards = [...cards, cardToAdd];
    const tempLists = [...lists];
    tempLists[listIdx].cards = newCards;
    setLists([...tempLists]);
    setIsAddingCard(false);
  };

  const handleIsAddingCard = (list: string) => {
    setIsAddingCard(true);
    setDefaultList(list);
  };

  return (
    <div className={styles.listsContainer}>
      {lists.map((list) => (
        <List
          onAddCardClick={handleIsAddingCard}
          listItem={list}
          key={list.list}
        />
      ))}
      {isAddingCard && (
        <CardModal
          listOptions={listOptions}
          defaultList={defaultList}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Lists;
