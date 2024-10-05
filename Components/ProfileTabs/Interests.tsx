import React from "react";
import { UserInterest } from "../Constants";
import Profile from "../Profile";

// type InterestFormProps = {
// 	updateFields: (fields: )=> void
// };
const Interests: React.FC = ({ updateFields }: any) => {
	return (
		<Profile
			options={UserInterest}
			updateFields={updateFields}
			heading="Which of these are you interested in"
		/>
	);
};

export default Interests;
