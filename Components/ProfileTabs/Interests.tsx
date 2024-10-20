import React from "react";
import { UserInterest } from "../Constants";
import Profile from "../Profile";

const Interests: React.FC = ({ updateFields }: any) => {
	return (
		<Profile
			options={UserInterest}
			heading="Which of these are you interested in"
		/>
	);
};

export default Interests;
