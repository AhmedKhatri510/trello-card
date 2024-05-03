import { useEffect, useState } from "react";

// components
import List from "./list/List";
import CardModal from "../card-modal/CardModal";

// utils
import { v4 as uuidv4 } from "uuid";
import { initialList } from "../../helper/utils";

// types
import { EditingCard, InitialValues, ListType } from "../../type/type";

// styles
import styles from "./lists.module.scss";
import { ListContext } from "../../context/listContext";

const Lists = () => {
  const [lists, setLists] = useState<ListType[]>(() => {
    const storedList = localStorage.getItem("lists");
    return storedList ? JSON.parse(storedList) : initialList;
  });

  const listOptions = lists.map((list) => list.list);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [defaultList, setDefaultList] = useState(lists[0].list);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCard, setEditingCard] = useState<null | EditingCard>(null);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const handleCancel = () => {
    setIsAddingCard(false);
    setIsEditing(false);
    setEditingCard(null);
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

  const handleEditSubmit = (values: InitialValues) => {
    const {
      list: newList,
      title: newTitle,
      description: newDescription,
    } = values;

    const { list: oldList, id } = editingCard as EditingCard;

    // delete the old card from the old list
    const tempLists = [...lists];
    const oldListIdx = tempLists.findIndex((list) => list.list === oldList);
    const { cards: oldCards } = tempLists[oldListIdx];
    const cardIdx = oldCards.findIndex((card) => card.id === id);
    oldCards.splice(cardIdx, 1);

    // append the new card in the new list
    const newListIdx = tempLists.findIndex((list) => list.list === newList);
    const cardToAdd = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
    };
    const { cards } = tempLists[newListIdx];
    const newCards = [...cards, cardToAdd];
    tempLists[newListIdx].cards = newCards;

    setLists(tempLists);
    setIsEditing(false);
    setEditingCard(null);
  };

  const handleDeleteCard = () => {
    const { list: deletingList, id } = editingCard as EditingCard;
    // find the list
    const listIdx = lists.findIndex((list) => list.list === deletingList);
    const tempLists = [...lists];

    // find the card in the list
    const { cards } = tempLists[listIdx];
    const cardIdx = cards.findIndex((card) => card.id === id);

    // delete the card
    cards.splice(cardIdx, 1);

    // update the list
    setLists([...tempLists]);

    setIsEditing(false);
    setEditingCard(null);
  };

  return (
    <div className={styles.listsContainer}>
      <ListContext.Provider
        value={{
          lists,
          setLists,
          isEditing,
          setIsEditing,
          editingCard,
          setEditingCard,
          setDefaultList,
          handleEditSubmit,
          handleDeleteCard,
        }}
      >
        {lists.map((list) => (
          <List
            onAddCardClick={handleIsAddingCard}
            listItem={list}
            key={list.list}
          />
        ))}
        {(isAddingCard || isEditing) && (
          <CardModal
            listOptions={listOptions}
            defaultList={defaultList}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        )}
      </ListContext.Provider>
    </div>
  );
};

export default Lists;
