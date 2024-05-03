// utils
import cn from "classnames";

// styles
import styles from "./button.module.scss";

type Props = {
  text: string;
  btnType?: "submit" | "reset" | "button" | undefined;
  type: "light" | "dark";
  handleClick?: () => void;
  isDisabled?: boolean;
};
const Button = ({
  text,
  btnType = "button",
  type,
  handleClick,
  isDisabled = false,
}: Props) => {
  const isLightBtn = type === "light";
  return (
    <button
      type={btnType}
      className={cn(
        styles.btn,
        { [styles.light]: isLightBtn },
        { [styles.dark]: !isLightBtn },
        { [styles.disabled]: isDisabled }
      )}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
