import { BsEye, BsEyeFill, BsEyeSlash } from "react-icons/bs";

interface CompProps {
	setOpen: any;
	Open: any;
	styles: any;
}

const ViewPassword: React.FC<CompProps> = ({ setOpen, Open, styles }) => {
	const handletoggle = () => {
		setOpen(!Open);
	};
	return (
		<div>
			<button
				type="button"
				className={`absolute ${styles}  z-10  w-11 h-10 flex justify-center items-center`}
				onClick={handletoggle}
			>
				{Open ? <BsEyeFill /> : <BsEyeSlash />}
			</button>
		</div>
	);
};

export default ViewPassword;
