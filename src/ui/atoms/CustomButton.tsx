import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  loading?: boolean;
  children?: ReactNode;
}
const CustomButton: FC<ButtonProps> = ({
  variant,
  size,
  loading,
  children,
  ...rest
}) => {
  const allVariants = [
    "primary",
    "primary_outline",
    "secondary",
    "secondary_outline",
    "ternary",
    "ternary_outline",
    "warning",
    "warning_outline",
  ];

  let buttonStyles = allVariants.includes(variant || "") ? variant : "primary";

  let buttonSize = size;
  switch (size) {
    case "small":
      buttonSize = "btn-small";
      break;
    case "medium":
      buttonSize = "btn-medium";
      break;
    case "large":
      buttonSize = "btn-large";
      break;
    case "xl-large":
      buttonSize = "btn-xl-large";
      break;
    default:
      buttonSize = "btn-medium";
  }

  return (
    <div className="button_section">
      <button
        {...rest}
        className={`${buttonStyles} ${buttonSize} btn`}
        disabled={loading}
      >
        {children}
      </button>
    </div>
  );
};
export default CustomButton;
