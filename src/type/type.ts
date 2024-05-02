export type CardType = {
  id: string;
  title: string;
  description: string;
};

export type ListType = {
  list: string;
  cards: CardType[];
};

export type InitialValues = {
  list: string;
  title: string;
  description: string;
};
