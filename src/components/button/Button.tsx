// utils
import cn from "classnames";

// styles
import styles from "./button.module.scss";

type Props = {
  text: string;
  type: "light" | "dark";
  handleClick: () => void;
};
const Button = ({ text, type, handleClick }: Props) => {
  const isLightBtn = type === "light";
  return (
    <button
      className={cn(
        styles.btn,
        { [styles.light]: isLightBtn },
        { [styles.dark]: !isLightBtn }
      )}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
