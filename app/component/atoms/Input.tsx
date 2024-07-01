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
  return (
    <div>
      {" "}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
        className={className}
      />
    </div>
  );
}
