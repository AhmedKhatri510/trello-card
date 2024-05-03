import React, { createContext } from "react";
import { EditingCard, InitialValues } from "../type/type";

type ListContextType = {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingCard: React.Dispatch<React.SetStateAction<EditingCard | null>>;
  isEditing: boolean;
  editingCard: null | EditingCard;
  setDefaultList: React.Dispatch<React.SetStateAction<string>>;
  handleEditSubmit: (values: InitialValues) => void;
  handleDeleteCard: () => void;
};

const initialContext: ListContextType = {
  setIsEditing: () => {},
  setEditingCard: () => null,
  isEditing: false,
  editingCard: null,
  setDefaultList: () => {},
  handleEditSubmit: () => {},
  handleDeleteCard: () => {},
};

export const ListContext = createContext(initialContext);
