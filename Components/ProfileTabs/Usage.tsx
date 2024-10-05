import React from "react";
import { Usage } from "../Constants";
import Profile from "../Profile";

const Interests: React.FC = ({}) => {
	return (
		<Profile
			options={Usage}
			heading="Which of these do you want  to do on jobmingle?"
		/>
	);
};

export default Interests;
