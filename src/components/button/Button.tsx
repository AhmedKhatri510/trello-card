// utils
import cn from "classnames";

// styles
import styles from "./button.module.scss";

type Props = {
  text: string;
  btnType?: "submit" | "reset" | "button" | undefined;
  type: "light" | "dark";
  handleClick: () => void;
};
const Button = ({ text, btnType, type, handleClick }: Props) => {
  const isLightBtn = type === "light";
  return (
    <button
      type={btnType || "button"}
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
