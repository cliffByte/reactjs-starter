import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  loading?: boolean;
  children?: ReactNode;
}
const Button: FC<ButtonProps> = ({ variant, loading, children, ...rest }) => {
  let buttonStyles = variant;

  const allVariants = [
    "primary",
    "primary_outline",
    "secondary",
    "secondary_outline",
  ];

  buttonStyles = allVariants.includes(variant || "") ? variant : "primary";

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
