import React from "react";

export default function Button({
	type,
	children,
	onClick,
	disabled,
	flexible,
}: {
	children: React.ReactNode;
	type: any;
	flexible?: boolean;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
	const styles: Record<string, string> = {
		login: `border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[3rem] pl-4 mt-[4.5rem] sm:mt-6 bg-[#F6CC16] text-center flex justify-center items-center ${
			disabled && "cursor-not-allowed"
		} `,
		profile: `border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-[${
			flexible ? "100%" : "35%"
		}] rounded-[10px] h-[3rem] sm:h-[3rem] pl-4 mt-[4.5rem] sm:mt-6 bg-[#F6CC16]   `,
		logout:
			"border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-ful rounded-[10px] h-[3rem] sm:h-[3rem] px-4 mt-[4.5rem] sm:mt-6 bg-[#504e46] text-center",
	};

	if (onClick)
		return (
			<button className={styles[type]} type="button" onClick={onClick}>
				{children}
			</button>
		);
	if (disabled)
		return (
			<button className={styles[type]} disabled={disabled}>
				{children}
			</button>
		);

	return <button className={styles[type]}>{children}</button>;
}
