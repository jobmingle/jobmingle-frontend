import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
	// const defaultClassName =
	// 	" border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[3rem] pl-4 mt-[3.5rem] sm:mt-6 bg-[#F6CC16] text-center flex justify-center items-center ";
	const defaultClassName =
		"flex justify-center items-center h-[3rem]  w-[140px]  py-3 px-6 rounded  hover:bg-[#FFBE0B] bg-[#cccce0] font-sans text-[#006] font-['DM font-medium leading-6";
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
