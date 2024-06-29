import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  const defaultClassName =
    "flex  w-[140px] justify-center gap-2 py-3 px-6 rounded  hover:bg-[#FFBE0B] bg-[#cccce0] font-sans text-[#006] font-['DM font-medium leading-6";
  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
};

export default Button;
