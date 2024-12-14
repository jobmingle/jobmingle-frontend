import Button from "../atoms/Button";

type ModalStateProps = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	H1: string;
	P1: string;
	P2: string;
	cta: string;
};

export default function ModalController({
	setIsOpen,
	H1,
	P1,
	P2,
	cta,
}: ModalStateProps) {
	const handleOpen = () => {
		setIsOpen(true);
	};
	return (
		<div>
			<div className="w-auto sm:w-[45rem] h-auto min-h-[12rem] border-yellow-400 border-[1px] border-solid m-auto rounded-md flex flex-col justify-evenly px-2 py-2 gap-3 bg-yellow-500 ">
				<h4 className="sora capitalize text-center text-lg font-semibold ">
					{/* Tired of Sending Countless Job Applications Without Landing an
					Interview? */}
					{H1}
				</h4>
				<p className="px-2 text-left text-sm sora ">
					{/* Then your CV or work portfolio could be the problem. Collaborate with
					our team of expert CV writers and portfolio specialists to uniquely
					showcase your skills and experience, so you start landing job
					interviews. */}
					{P1}
				</p>
				<p className="px-2 text-left text-sm sora">
					{/* Click the button below and elevate your career today! */}
					{P2}
				</p>
				<Button
					className="w-[50%]- w-full bg-black text-white"
					onClick={handleOpen}
				>
					{/* Rebuild My CV/Portfolio */}
					{cta}
				</Button>
			</div>
		</div>
	);
}
