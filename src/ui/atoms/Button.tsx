import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  loading?: boolean;
  children?: ReactNode;
}
const Button: FC<ButtonProps> = ({ variant, loading, children, ...rest }) => {
  let buttonStyles = variant;
  if (variant === "primary") buttonStyles = "primary";
  else if (variant === "primary_outline") buttonStyles = "primary_outline";
  else if (variant === "secondary") buttonStyles = "secondary";
  else if (variant === "secondary_outline") buttonStyles = "secondary_outline";
  else buttonStyles = "primary";
  return (
    <div className="button_section">
      <button {...rest} className={buttonStyles} disabled={loading}>
        {loading ? (
          <>
            <Spinner /> &nbsp; Loading..
          </>
        ) : (
          children
        )}
      </button>
    </div>
  );
};
export default Button;
