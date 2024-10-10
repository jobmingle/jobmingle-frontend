import React, { useState } from "react";

type Option = {
	id: number;
	title: string;
};
type ProfileData = {
	interests: string[];
	options: Option[];
	heading: string;
};
type ProfileProps = {
	options: Option[];
	heading: string;
	updateFields: (fields: Partial<ProfileData>) => void;
};

const Profile: React.FC<ProfileProps> = ({
	options,
	heading,
	updateFields,
}) => {
	const [selected, setSelected] = useState<string[]>([]);

	const handleSelected = (title: string): void => {
		setSelected((prevState) => {
			if (prevState.includes(title)) {
				return prevState.filter((opt) => opt !== title);
			} else {
				return [...prevState, title];
			}
		});
	};

	return (
		<div className=" w-full">
			<p className="montserrat font-semibold text-sm my-4 sm:text-lg text-black-100 w-full text-center px-4">
				{heading}
			</p>
			<div className="flex flex-col space-y-6 justify-center">
				{options.map((item) => (
					<input
						type="button"
						className={`list-none py-3 cursor-pointer pl-2 border-black-100 border-solid border-[1px] sora rounded-[10px] capitalize ${
							selected.includes(item.title)
								? "text-yellow-500 border-yellow-500"
								: ""
						} `}
						key={item.id}
						id={item.title}
						onClick={() => handleSelected(item.title)}
						onChange={(e) => updateFields({ interests: [...e.target.value] })}
						value={item.title}
					/>
				))}
			</div>
		</div>
	);
};

export default Profile;
