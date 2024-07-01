import React from "react";

type Props = {
  value: string;
  placeholder: string;
  onchange: any;
  className: string;
  name: string;
  type: string;
};
export default function Input({
  value,
  placeholder,
  onchange,
  type,
  name,
  className,
}: Props) {
  const defaultClassName =
    "w-full text-[#f8f9fa] font-light  bg-[#f4f4f5]  max-md:h-[50px]  max-md:font-normal bg-[#D2CFCF] md:w-[500.2px] h-[61px] p-2 border rounded-[5px]  border-opacity-0 mb-4 ";
  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;
  return (
    <div>
      {" "}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
        className={finalClassName}
      />
    </div>
  );
}
