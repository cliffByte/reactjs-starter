import { FC, ButtonHTMLAttributes, ReactNode } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?:string;
  loading?: boolean;
  children?: ReactNode;
}
const CustomButton: FC<ButtonProps> = ({ variant, size,loading, children, ...rest }) => {
  let buttonStyles = variant;
  if (variant === "primary") buttonStyles = "primary";
  else if (variant === "primary_outline") buttonStyles = "primary_outline";
  else if (variant === "secondary") buttonStyles = "secondary";
  else if (variant === "secondary_outline") buttonStyles = "secondary_outline";
  else if (variant === "tenerary") buttonStyles = "tenerary";
  else if (variant === "tenerary_outline") buttonStyles = "tenerary_outline";
  else if (variant === "warning") buttonStyles = "warning";
  else if (variant === "warning_outline") buttonStyles = "warning_outline";
  else if (variant === "tenerary") buttonStyles = "tenerary";
  else if (variant === "tenerary_outline") buttonStyles = "tenerary_outline";
  else buttonStyles = "primary";

  let buttonSize = size;
  if (size === "small") buttonSize = "btn-small";
  else if (size === "medium") buttonSize = "btn-medium";
  else if (size === "large") buttonSize = "btn-large";
  else if (size === "xl-large") buttonSize = "btn-xl-large";
  else buttonSize = "btn-medium";

  return (
    <div className="button_section">
      <button {...rest} className={`${buttonStyles} ${buttonSize} btn`} disabled={loading}>
       {children}
      </button>
    </div>
  );
};
export default CustomButton;
