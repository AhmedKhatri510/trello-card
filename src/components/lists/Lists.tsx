// components
import List from "./list/List";

// types
import { ListType } from "../../type/type";

// styles
import styles from "./lists.module.scss";

const Lists = () => {
  const lists: ListType[] = [
    {
      list: "todo",
      cards: [
        {
          id: "1",
          title: "abcd",
          description: "sdfsdfsd sdf sdf sdfsdf ",
        },
        {
          id: "2",
          title: "abcd",
          description: "sdfsdfsd sdf sdf sdfsdf ",
        },
        {
          id: "3",
          title: "abcd",
          description: "sdfsdfsd sdf sdf sdfsdf ",
        },
        {
          id: "4",
          title: "abcd",
          description: "sdfsdfsd sdf sdf sdfsdf ",
        },
        {
          id: "5",
          title: "abcd",
          description:
            "sdfsdfsd sdf sdf sdfsdf \nsdfsdf dfsdf\nsdfsdfsdf sdf sdf sdf sdf sd fs df sdf sd fs dfs df sdf sdf sdf sdfs dfsdfsdfsdfs sdfsdfsdfsfsf sdfs dfsdfsdfsdfsdfsdfsdf",
        },
      ],
    },
    {
      list: "doing",
      cards: [],
    },
    {
      list: "done",
      cards: [],
    },
  ];
  return (
    <div className={styles.listsContainer}>
      {lists.map((list) => (
        <List listItem={list} key={list.list} />
      ))}
    </div>
  );
};

export default Lists;
